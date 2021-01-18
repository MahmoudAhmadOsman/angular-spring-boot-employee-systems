package com.employee.repository;

import com.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


//CRUD - Repository
//@CrossOrigin(origins = "http://localhost:4200")
public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
}
