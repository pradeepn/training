import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Hero } from '../../models/hero';
import heros from '../../../../src/assets/data/heros.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroData: Hero[];
  hero: Hero;
  users: any = [];
  user: any = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) { 
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
  getData() {
    this.http.get('https://reqres.in/api/users').subscribe((data: any) => this.users = data);
  }
  getUser(id) {
    this.http.get('https://reqres.in/api/user/' + id).subscribe((data: any) => this.user = data);

  }
}
