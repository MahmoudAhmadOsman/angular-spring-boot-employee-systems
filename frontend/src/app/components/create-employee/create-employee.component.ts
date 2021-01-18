import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../employee';
import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  title: string = 'Register New Employee';
  // Define a property for new employee to create a new object from the [Employee class]
  employee: Employee = new Employee();


//Success alert
  showSuccessAlert: boolean = false;
  //@Inject the EmployeeService here that has createEmployee method init
  constructor(private employeeService: EmployeeService, private router: Router) {

  }
//then create a save method
saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
          //console.log(data);
           //this.router.navigate(['/employees']); // OR
    this.goToEmployeeList();// After you insert the data into the database, go to the (['/employees']) page
    //Now, after data is created, show the success message
    this.showSuccessAlert = true;
    
  }),
    
  error=> console.log(error);
}

//After you save, go back to the employee page, but you need to inject router into the contructor()
goToEmployeeList(){
  //Now you can use the router to navigate the path you want using Angular navigate() function
  this.router.navigate(['/create-employee']);
  this.reloadPage();
 
}

  //Reload page after 2ms
  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
  
  //Define the onSubmit() function to handle the submitted data
  onSubmit() {
    //console.log(this.employee);
    this.saveEmployee();
    
  }



  ngOnInit(): void {}

//Toaster message
//   successmsg(){  
//     this.toastr.success("New employee registered!",'Success')  
// }

}


 