import { Pipe, PipeTransform } from '@angular/core';
import {Hero } from '../models/hero';
@Pipe({
  name: 'canFly',
  pure: true
})
export class CanFlyPipe implements PipeTransform {

  transform(heros: Hero[], args?: any): any {
    return heros.filter(hero => hero.canFly);
  }

}
