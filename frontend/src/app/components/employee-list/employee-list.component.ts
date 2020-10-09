import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  title: string = 'Employees Inventory';
  //Import the Employee class
  employees: Employee[];

  //2. Now, @inject the employee.service.ts in this employee-list.component.ts Component
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    //3. Define a function & then call it inside ngOnInit()  to organize the code
    this.getEmployees();
  }
  //Define getEmployees method  or function here
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }
}
