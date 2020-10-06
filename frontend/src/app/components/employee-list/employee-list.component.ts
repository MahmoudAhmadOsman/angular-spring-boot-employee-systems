import { Employee } from './../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  title: string = 'Employee list';
  //Import the Employee class
  employees: Employee[];

  constructor() {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        emailId: 'johndoe@gmail.com',
      },
      {
        id: 2,
        firstName: 'Mahmoud',
        lastName: 'Osman',
        emailId: 'osman.example@gmail.com',
        //imageUrl: 'https://source.unsplash.com/160x90/?user',
      },
      {
        id: 3,
        firstName: 'John',
        lastName: 'Smith',
        emailId: 'john-smith@gmail.com',
      },
    ];
  }
}
