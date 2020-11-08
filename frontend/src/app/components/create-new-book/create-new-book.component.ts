import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
 

@Component({
  selector: 'app-create-new-book',
  templateUrl: './create-new-book.component.html',
  styleUrls: ['./create-new-book.component.scss']
})
export class CreateNewBookComponent implements OnInit {
  addBookTitle: string = 'Add New Book';
  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router) { }

  //Save The NEW Book
saveBook(){
  this.bookService.createNewBook(this.book).subscribe(data =>{
          console.log(data);
          this.goToBookList();
  }),
  error=> console.log(error);
}


goToBookList(){
  this.router.navigate(['/books']);
}

//After add book form is submitted
onSubmitBook(){
  this.saveBook(); 
   console.log(this.book);
}

  ngOnInit(): void {

  }

}
