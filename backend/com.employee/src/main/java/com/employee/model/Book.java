package com.employee.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "isbn", nullable = false)
    private String isbn;


    @Column(name = "book_image", nullable = false)
    private String bookImage;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private String price;

    @Column(name = "author", nullable = false)
    private String author;

    public Book() {
    }

    public Book(String title, String isbn, String bookImage, String description, String price, String author) {
        this.title = title;
        this.isbn = isbn;
        this.bookImage = bookImage;
        this.description = description;
        this.price = price;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getBookImage() {
        return bookImage;
    }

    public void setBookImage(String bookImage) {
        this.bookImage = bookImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}


