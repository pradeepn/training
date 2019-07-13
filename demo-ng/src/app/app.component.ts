import { Component, ModuleWithComponentFactories } from '@angular/core';
import { Hero } from './models/hero';
import heros from '../assets/data/heros.json';
import moment from 'moment';
import _ from 'underscore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-ng';
  herosData: Hero[] = heros;
  today: any = moment().format('dddd');
  now: any = _.now();
}
