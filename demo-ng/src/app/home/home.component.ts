import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  isDisabled: boolean;
  date: Date;
  constructor() { 
    this.name = "Hello World";
    this.isDisabled = false;
    this.date = new Date();
  }
btnClick() {
  alert('clicked');
}
  ngOnInit() {
  }

}
