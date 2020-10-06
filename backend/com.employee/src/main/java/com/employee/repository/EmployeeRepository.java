package com.employee.repository;

import com.employee.modal.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


//CRUD - Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
}
