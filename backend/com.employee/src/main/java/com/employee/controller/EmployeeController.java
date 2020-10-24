package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.employee.exception.ResourceNotFoundException;
import com.employee.modal.Employee;
import com.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


//Add RestController  & RequestMapping Annotations
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    //Now, Inject the Employee Repository here & add Autowired annotation
    @Autowired
    private EmployeeRepository employeeRepository; //inject, repository here


    //@GET METHOD
    //1. GET REST API - Get all the employee list from the database using <List> method
    // Setup a getAllEmployees() function and pass the employeeRepository with the Spring Boot findAll() method

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();

    }


    //@CREATE METHOD
    //Create new Employee - restful api
    //Annotate @PostMapping to handle the post method
    @PostMapping("/employees") // Map the url to employees & add @RequestBody as an arg to the createEmployee method
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

   //@GET METHOD
  @DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee with this " + id + " does not exist."));
        //Use ResponseEntity and pass <Employee> as an arg
        return ResponseEntity.ok(employee);

  }



   //@UPDATE METHOD
    //Annotate @PutMapping,  add @PathVariable &  @RequestBody
   @CrossOrigin(origins = "http://localhost:4200") //class level CORS
   @PutMapping("/employees/{id}")
   public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
       //Retrieve user from the database
       //employee & and employeeDetails are local variables
       Employee employee = employeeRepository.findById(id)
               .orElseThrow(()-> new ResourceNotFoundException("Employee with this " + id + " does not exist."));
       //Now, set the names such as firstName, lastName & email
       employee.setFirstName(employeeDetails.getFirstName());
       employee.setLastName(employeeDetails.getLastName());
       employee.setEmail(employeeDetails.getEmail());
       //Now save the updated value into the database
       Employee updatedEmployee = employeeRepository.save(employee);
       //Now return ok status using ResponseEntity.ok() method
       return ResponseEntity.ok(updatedEmployee);

   }


    //@DELETE METHOD: employee using rest api by its id
//    @DeleteMapping("/employees/{id}")
//    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
//        Employee employee = employeeRepository.findById(id)
//                .orElseThrow(()-> new ResourceNotFoundException("Employee with this id does not exist." +id));
//        employeeRepository.delete(employee);
//        Map<String, Boolean> response = new HashMap<>();
//        response.put("deleted", Boolean.TRUE);
//        return ResponseEntity.ok(response);
//    }







}
