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




 
}
