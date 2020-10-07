package com.employee.controller;

import com.employee.modal.Employee;
import com.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
