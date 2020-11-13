import {enableProdMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ContactComponent } from './components/contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CreateNewBookComponent } from './components/create-new-book/create-new-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
  
import { Ng2SearchPipeModule } from 'ng2-search-filter';

 
 

 
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    NavbarComponent,
    BooksComponent,
    CreateEmployeeComponent,
     UpdateEmployeeComponent,
    ParentComponent,
    ChildComponent,
    ContactComponent,
    ViewEmployeeComponent,
    FooterComponent,
    BookDetailsComponent,
    CreateNewBookComponent,
    EditBookComponent,
 
  
  
  ],
  imports: [BrowserModule,
     AppRoutingModule,
     HttpClientModule, FormsModule, 
     Ng2SearchPipeModule],
  providers: [],
  
  bootstrap: [AppComponent],
  
})
export class AppModule {}
