import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  name: string;
  isDisabled: boolean;
  date: Date;
  constructor() {
    this.name = 'Hello World';
    this.isDisabled = false;
    this.date = new Date();
  }
btnClick() {
  alert('clicked');
}
getColor(gender) {
  if(gender === 'Male')
    return 'Blue';
  else
    return 'Purple';

}
  ngOnInit() {
  }

}
