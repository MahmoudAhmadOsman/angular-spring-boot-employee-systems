package com.employee.modal;


import javax.persistence.*;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "ISBN")
    private String ISBN;

    @Column(name = "price")
    private  String price;

    @Column(name = "book_image")
    private String bookImage;

    @Column(name = "author")
    private String author;


    //Empty constructor
    public Book() {
    }

    public Book(String title, String ISBN, String price, String bookImage, String author) {
        this.title = title;
        this.ISBN = ISBN;
        this.price = price;
        this.bookImage = bookImage;
        this.author = author;
    }

    //Getters and Setters


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

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getBookImage() {
        return bookImage;
    }

    public void setBookImage(String bookImage) {
        this.bookImage = bookImage;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}


