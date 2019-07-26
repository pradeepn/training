import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm, FormBuilder, Validators, FormGroup, FormControl, } from '@angular/forms';
import { Hero } from '../../models/hero';
import heros from '../../../../src/assets/data/heros.json';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class  HeroListComponent implements OnInit {
  @ViewChild('heroForm') heroForm: any;
  heroData: Hero[];
  hero: Hero;
  flyFilter: boolean;
  heroReactiveForm = this.fb.group({
    name: ['tests', Validators.required],
    gender: ['', Validators.required],
    canFly: ['', Validators.required]
  }); 
  constructor(private fb: FormBuilder) {
    this.heroData = heros;
    this.flyFilter = false;
    this.newHero();
  }
newHero() {
  this.hero = new Hero();
  this.hero.id = this.heroData.length + 1;
  this.hero.name = '';
  this.hero.canFly = false;
}
saveHero() {
  if (this.heroForm.valid) {
    this.heroData.push(this.hero);
    this.newHero();
  }
  //this.heroForm.reset();
}
onHeroSubmit() {
  var data = this.heroReactiveForm.value;
  data['id'] = this.heroData.length + 1;
  if (this.heroReactiveForm.  ) {
    this.heroData.push(data);
  }
}
  ngOnInit() {
    
  }

}
