package com.employee.controller;

import java.util.List;
import com.employee.modal.Book;
import com.employee.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    //@ GET METHOD - Get all books
    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }






}