import { Employee } from './../employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private HttpClient: HttpClient) {}

  //Create a method getEmployeesList() and call Observable
  getEmployeesList(): Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(`${this.baseUrl}`);
  }
}
