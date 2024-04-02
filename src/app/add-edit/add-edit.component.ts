import {Component, Input, ViewChild} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
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
    ReactiveFormsModule
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AddEditComponent {
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

  constructor(private _fb: FormBuilder, private _studService: StudentsService, private _dialogRef: MatDialogRef<AddEditComponent>) {
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

  onFormSubmit() {
    if(this.form.valid) {
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
