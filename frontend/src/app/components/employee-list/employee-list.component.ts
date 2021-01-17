import { Router } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../employee';
import { Component, OnInit, PipeTransform } from '@angular/core';
 
  
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
   
})
export class EmployeeListComponent implements OnInit {
//Search
  EmployeeName: string;
  title: string = 'Employees Inventory';
  //Pagination
  totalRecords: String;
  page: Number = 1;

  //Import the Employee class
  employees: Employee[];

  //2. Now, @inject, 'employee.service.ts' in this employee-list.component.ts Component
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    //3. Define a function & then call it inside ngOnInit()  to organize your code
    this.getEmployees();
  }
  //Define getEmployees() method  or function to get all the employees list, 
  //and subscribe to to the  EmployeeService class to get the empployee list that stored in the backend
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
     
      this.employees = data;
    //this.totalRecords = data.employees.length;

        
    });
  }


//UPDATE Employee function
updateEmployee(id: number){
this.router.navigate(['update-employee', id]);
}

//VIEW Employee
viewEmployee(id: number){
this.router.navigate(['view-employee', id]);
}



//DELETE Employee
  deleteEmployee(id: number) {
    alert("Are you sure, you want to delete this record?");
   this.employeeService.deleteEmployee(id).subscribe(data =>{
     this.getEmployees();
   }, error=> console.log("Error: while deleting an employee",error));
}



}
