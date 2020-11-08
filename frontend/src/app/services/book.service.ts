import { Book } from './../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL ="http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient) { }

  //GET METHOD- Get all books 
getBooksList(): Observable<Book[]>{
  return this.httpClient.get<Book[]>(`${this.baseURL}`);
}



//Add or Create New Book
createNewBook(book: Book):Observable<any>{
  return this.httpClient.post(`${this.baseURL}`, book);
 
}

//Get book by its it
getBookById(id:number): Observable<Book>  {
return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
}


//====VIEW METHOD: View Book by its id
viewBookDetails(id:number): Observable<Book>  {
return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
}


//Edit OR Update book
editBook(id: number, book: Book):Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, book);
  //Now, call this function inside the update book-details.ts 
}
 

//DELETE A BOOK
deleteBookK(id: number): Observable<Object>{
return this.httpClient.delete(`${this.baseURL}/${id}`);
}




 
}
