package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.employee.exception.ResourceNotFoundException;
import com.employee.modal.Book;
import com.employee.modal.Employee;
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


    //@GET METHOD - Find a book by its id
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("A book with this id does not exist:" + id));
        return  ResponseEntity.ok(book);
    }



    //@UPDATE METHOD
    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookDetails){
        //Retrieve user from the database

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book with this id does not exist " + id));
        //Now, set the names
        book.setTitle(bookDetails.getTitle());
        book.setIsbn(bookDetails.getIsbn());
        book.setBookImage(bookDetails.getBookImage());
        book.setDescription(bookDetails.getDescription());
        book.setPrice(bookDetails.getPrice());
        book.setAuthor(bookDetails.getAuthor());
        //Now save the updated value into the database
        Book updatedBook = bookRepository.save(book);
        //Now return ok status using ResponseEntity.ok() method
        return ResponseEntity.ok(updatedBook);
    }


    // //@DELETE METHOD
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id){
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book with this id does not exist :" + id));

        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }




}