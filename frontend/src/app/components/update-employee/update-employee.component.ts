import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  title: string ="Update Employee";
//1. @inject EmployeeService 
//2. Create instantiate new employee object
id: number;
employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    //3. Then, get new emp. by id by using activated route
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },
    error => console.log( "Unable to get employee by id ", error));



    
  }

}