import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {AddEditComponent} from "./add-edit/add-edit.component";
import {ShowDataComponent} from "./show-data/show-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIconButton, MatIcon, MatButton, ShowDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-app';

  @ViewChild(ShowDataComponent)
  showData!: ShowDataComponent;

  constructor(private _dialog: MatDialog) {}

  openAddEditStudForm() {
    const dialogRef = this._dialog.open(AddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.showData.getStudentList();
        }
      }
    });
  }
}
