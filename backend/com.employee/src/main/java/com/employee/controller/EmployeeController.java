package com.employee.controller;

import com.employee.exception.ResourceNotFoundException;
import com.employee.modal.Employee;
import com.employee.repository.EmployeeRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RestController;



//Add RestController  & RequestMapping Annotations
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    //Now, Inject the Employee Repository here & add Autowired annotation
    @Autowired
    private EmployeeRepository employeeRepository;

    //Then, setup all the endpoint REST APIs here

    //1. GET REST API - Get all the employee list from the database using <List> method
    // Setup a getAllEmployees() function and pass the employeeRepository with the Spring Boot findAll() method
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();

    }

    //Creating new Employee - restful api
    //Annotate @PostMapping to handle the post method
    @PostMapping("/employees") // Map the url to employees & add @RequestBody as an arg to the createEmployee method
    public Employee createEmployee(@RequestBody Employee employee){

        return employeeRepository.save(employee);
    }

   //Get Employee by id rest api by its id
  @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee with this" + id + "does not exist."));
        //Use ResponseEntity and pass <Employee> as an arg
        return ResponseEntity.ok(employee);

  }



   //Update employee using rest api by its id
    //Annotate @PutMapping,  add @PathVariable &  @RequestBody
   @PutMapping("/employees/{id}")
   public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
       //Retrieve user from the database
       //employee & and employeeDetails are local variables
       Employee employee = employeeRepository.findById(id)
               .orElseThrow(()-> new ResourceNotFoundException("Employee with this" + id + "does not exist."));
       //Now, set the names such as firstName, lastName & email
       employee.setFirstName(employeeDetails.getFirstName());
       employee.setLastName(employeeDetails.getLastName());
       employee.setEmail(employeeDetails.getEmail());
       //Now save the updated value into the database
       Employee updatedEmployee = employeeRepository.save(employee);
       //Now return ok status using ResponseEntity.ok() method
       return ResponseEntity.ok(updatedEmployee);

   }


    //Delete employee using rest api by its id



}
