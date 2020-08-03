import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelCarEditGroup1Component } from './model-car-edit-group1/model-car-edit-group1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ModelCarEditGroup1Component],
  exports: [ModelCarEditGroup1Component]
})
export class Group1Module { }
