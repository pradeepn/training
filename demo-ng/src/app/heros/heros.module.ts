import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HerosRoutingModule } from './heros-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosComponent } from './heros.component';
@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, HerosComponent],
  imports: [
    SharedModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
