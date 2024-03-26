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
import {provideNativeDateAdapter} from "@angular/material/core";

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
    MatDateRangePicker
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AddEditComponent {

}
