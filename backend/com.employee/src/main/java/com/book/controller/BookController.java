package com.book.controller;

import java.util.List;
import com.book.modal.Book;
import com.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2/books/")
public class BookController {

    //Autowires BookRepository here
    @Autowired
    private BookRepository bookRepository;

    //Get All Books
    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }


}
