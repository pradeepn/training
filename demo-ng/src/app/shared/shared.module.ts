import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
import { HilightDirective } from './hilight.directive';
@NgModule({
  declarations: [CanFlyPipe, HilightDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CanFlyPipe,
    HilightDirective
  ]
})
export class SharedModule { }
