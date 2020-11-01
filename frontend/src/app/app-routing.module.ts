import { BookDetailsComponent } from './components/book-details/book-details.component';

 import { ContactComponent } from './components/contact/contact.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  {path:"update-employee/:id", component: UpdateEmployeeComponent},
    {path:"view-employee/:id", component: ViewEmployeeComponent},
  { path: 'books', component: BooksComponent },
  {path:"book-details/:id", component: BookDetailsComponent },
  { path: 'contact', component: ContactComponent },
   { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
