import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http: HttpClient) { }

  addStudent(data: any): Observable<any> {
    return this._http.post("http://localhost:3000/students", data);
  }

  getStudentList(): Observable<any> {
    return this._http.get("http://localhost:3000/students");
  }

  deleteStudent(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/students/${id}`);
  }

  updateStudent(id: string, data: any): Observable<any> {
    return this._http.put("http://localhost:3000/students/"+id, data);
  }
}
