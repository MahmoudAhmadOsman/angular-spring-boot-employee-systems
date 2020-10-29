package com.employee.controller;

import java.util.List;

import com.employee.exception.ResourceNotFoundException;
import com.employee.modal.Book;
import com.employee.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


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


    //@GET METHOD - find by id
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("book with this id does not exist:" + id));
        return  ResponseEntity.ok(book);
    }







}