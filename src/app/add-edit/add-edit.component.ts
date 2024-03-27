import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
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
    NgForOf
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AddEditComponent {
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
}
