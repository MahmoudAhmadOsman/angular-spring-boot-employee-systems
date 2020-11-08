import { Employee } from './../employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {}

  //Create a method getEmployeesList() and call Observable
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

//1. Form Processing method
//================You can also use Observable<any> or <Object>
createEmployee(employee: Employee):Observable<any>{
  //Use POST method and pass the baseUrl to the POST method
  return this.httpClient.post(`${this.baseUrl}`, employee);
//2. @Inject this function into the create-employee.component.ts contructor() function
}


//=======UPDATE:
// GET Employee by id - to update an employee
//--Make RESTapi call
getEmployeeById(id:number): Observable<Employee>  {
return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
}



//====VIEW METHOD:
// View employee by id
viewEmployee(id:number): Observable<Employee>  {
return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
}



//==UPDATE METHOD

updateEmployee(id: number, employee: Employee):Observable<Object>{
  return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  //Now, call this function inside the update employee-list.component.ts
}

//==DELETE METHOD
deleteEmployee(id: number): Observable<Object>{
return this.httpClient.delete(`${this.baseUrl}/${id}`);
//Use this method  in the deleteEmployee() that is inside the employee-list-component.ts
}





}
