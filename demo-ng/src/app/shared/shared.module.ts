import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
import { HilightDirective } from './hilight.directive';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    CanFlyPipe,
    HilightDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CanFlyPipe,
    HilightDirective,
    CardComponent
  ]
})
export class SharedModule { }
