import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Hero } from '../../models/hero';
import heros from '../../../../src/assets/data/heros.json';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroData: Hero[];
  hero: Hero;
  constructor(private route: ActivatedRoute) { 
    this.heroData = heros;
  }

  ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
          this.heroData.forEach((p: Hero) => {
            if (p.id == Number(params.get('id'))) {
              this.hero = p;
            }
          });
        }); 
  }

}
