import { Employee } from './../../employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

   title: string ="Employee Details";
  //1. @inject EmployeeService 
//2. instantiate new employee object
id: number;
employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

 ngOnInit(): void {
    //3. Then, get new emp. by id using activated route
    this.id = this.route.snapshot.params['id'];
    this.employeeService.viewEmployee(this.id).subscribe(data =>{
      this.employee = data;
    },
    error => console.log( "Unable to get employee by id ", error));



    
  }

}



 
