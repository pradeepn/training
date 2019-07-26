import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
import { HilightDirective } from './hilight.directive';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    CanFlyPipe,
    HilightDirective,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CanFlyPipe,
    HilightDirective,
    CardComponent
  ]
})
export class SharedModule { }
