import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
@NgModule({
  declarations: [CanFlyPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CanFlyPipe
  ]
})
export class SharedModule { }
