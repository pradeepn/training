import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import heros from '../../../../src/assets/data/heros.json';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroData: Hero[];
  flyFilter: boolean;
  constructor() { 
    this.heroData = heros;
    this.flyFilter = true;
  }

  ngOnInit() {
    
  }

}
