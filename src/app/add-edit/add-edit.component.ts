import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {StudentsService} from "../services/students.service";

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatLabel,
    MatFormField,
    MatInput,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatHint,
    MatDateRangeInput,
    MatDateRangePicker,
    MatRadioButton,
    MatRadioGroup,
    MatSelect,
    MatOption,
    NgForOf,
    ReactiveFormsModule,
    MatIconButton,
    MatDialogClose
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AddEditComponent implements OnInit {
  form: FormGroup;

  academicLevel: string[] = [
    "Bachelor of Science (BSc)",
    "Master of Science (MSc)",
    "Doctorate of Philosophy (PhD)"
  ]

  courseOfStudy: string[] = [
    "Computer Engineering",
    "Electrical Engineering",
    "Architecture"
  ]

  constructor(private _fb: FormBuilder, private _studService: StudentsService, private _dialogRef: MatDialogRef<AddEditComponent>,
              @Inject(MAT_DIALOG_DATA) protected data: any) {
    this.form = this._fb.group({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        gender: "",
        academicLevel: "",
        courseOfStudy: ""
      }
    );
  }

  ngOnInit() {
    this.form.patchValue(this.data);
  }

  onFormSubmit() {
    if(this.form.valid) {
      if(this.data) {
        this._studService.updateStudent(this.data.id, this.form.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._studService.addStudent(this.form.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }
}
