package com.employee.controller;

import com.employee.modal.Employee;
import com.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

//Add RestController  & RequestMapping Annotations
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    //Now, Inject the Employee Repository here & add Autowired annotation
    @Autowired
    private EmployeeRepository  employeeRepository;

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


}
