import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  
 //Success alert
  //showSuccessAlert:boolean = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    //3. Then, get new emp. by id by using activated router
    this.id = this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe( data =>{
    this.employee =data;

  }, errror => console.log("Unable to get employee by id ", errror) )
 
  }


//onSubmit method that is inside update-employee.component.html form
onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
        //this.goToEmployeeList();
      this.router.navigate(["/employees"]);
     // this.showSuccessAlert = true;
    }, error=> console.log("Error while updating! ", error));
  }
// goToEmployeeList(){
//   this.router.navigate(["/employees"]);
// }


}