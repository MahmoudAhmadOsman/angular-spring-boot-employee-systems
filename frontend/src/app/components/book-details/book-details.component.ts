import { ActivatedRoute } from '@angular/router';
import { Book } from './../../models/book';
 
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
   title: string ="Book Details";
  id: number;
  book : Book = new Book();

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.viewBookDetails(this.id).subscribe(data =>{
      console.log(data);
      this.book = data;
    },
    error => console.log( "Unable to view or get book by id ", error));

  }

}

