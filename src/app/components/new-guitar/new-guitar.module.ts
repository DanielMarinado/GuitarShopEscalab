import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGuitarRoutingModule } from './new-guitar-routing.module';
import { NewGuitarComponent } from './new-guitar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewGuitarComponent
  ],
  imports: [
    CommonModule,
    NewGuitarRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewGuitarModule { }
