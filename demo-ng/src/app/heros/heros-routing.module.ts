import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: '', component: HerosComponent, children:[
    { path: '', component: HeroListComponent},
    { path: ':id', component: HeroDetailComponent}
  ]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
