import { Employee } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  title: string = 'Create New Employee';

  // Define a propert for new employee to create a new object from the Employee class
  employee: Employee = new Employee();

  //Define the onSubmit() function
  onSubmit() {
    console.log(this.employee);
  }

  constructor() {}

  ngOnInit(): void {}
}
