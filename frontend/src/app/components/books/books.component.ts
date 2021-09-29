import { Router } from '@angular/router';
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
 //Search book
  searchBookName: string;

  //Pagination
  totalRecords: String;
  page: Number=1;

  constructor(private bookService: BookService, private router: Router) {}
  
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

//VIEW Book Details
viewBookDetails(id: number){
this.router.navigate(['/books/book-details', id]);
}


}
