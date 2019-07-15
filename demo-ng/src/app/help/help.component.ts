import { Component, OnInit } from '@angular/core';
import { HilightDirective } from '../shared/hilight.directive';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  bgColor: string;
  name: string;
  isDisabled: boolean;
  date: Date;
  constructor() {
    this.bgColor = 'gray';
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
