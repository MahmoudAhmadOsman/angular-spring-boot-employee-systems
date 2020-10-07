import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Employee Management System';
  courses: any = (data as any).default;
  constructor() {}

  ngOnInit(): void {
    console.log(data);
  }
}
