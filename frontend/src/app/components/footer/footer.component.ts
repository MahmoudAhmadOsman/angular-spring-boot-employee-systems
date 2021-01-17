import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //Show current year
  ShowCurrentYear = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
