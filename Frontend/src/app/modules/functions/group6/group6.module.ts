import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarEditGroup6Component } from './car-edit-group6/car-edit-group6.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [CarEditGroup6Component],
  exports: [CarEditGroup6Component]
})
export class Group6Module { }
