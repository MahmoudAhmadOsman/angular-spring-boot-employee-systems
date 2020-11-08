import { BookService } from 'src/app/services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
   EditBooktitle: string ="Edit Book";
id: number;
book: Book = new Book();

  constructor(private BookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BookService.getBookById(this.id).subscribe( data =>{
      
       this.book =data;

   }, errror => console.log("Unable to get book by this id ", errror) )
 
    }
  

//onSubmitBook() method
onSubmitBook(){
    this.BookService.editBook(this.id, this.book).subscribe(data=>{
         
        this.router.navigate(["/books"]);
    }, error=> console.log("Error while updating! ", error));
  }





}


