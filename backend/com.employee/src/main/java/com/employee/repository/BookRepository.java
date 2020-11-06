package com.employee.repository;

import com.employee.modal.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


public interface BookRepository extends JpaRepository<Book, Long> {
}
