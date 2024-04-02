import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatPaginator} from "@angular/material/paginator";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {StudentsService} from "../services/students.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatNoDataRow,
    MatRowDef,
    MatHeaderRowDef,
    MatPaginator,
    MatLabel,
    MatSortHeader,
    DatePipe
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css'
})
export class ShowDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'birthday', 'gender', 'academicLevel', 'courseOfStudy'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _stuService: StudentsService) {}

  ngOnInit() {
    this.getStudentList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStudentList() {
    this._stuService.getStudentList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
