import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  title: string = 'Books Inventory';
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  //GET - Get list of all books
  private getAllBooks() {
    this.bookService.getBooksList().subscribe((data) => {
         console.log(data);
      this.books = data;
    });
  }






}
