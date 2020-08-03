import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestRentCarComponent } from './suggest-rent-car.component';
import { SuggestRentCarAddComponent } from './suggest-rent-car-add/suggest-rent-car-add.component';
import { SuggestRentCarEditComponent } from './suggest-rent-car-edit/suggest-rent-car-edit.component';
import { SuggestRentCarViewComponent } from './suggest-rent-car-view/suggest-rent-car-view.component';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
  imports: [
    CommonModule,
    FunctionsModule
  ],
  declarations: [
    SuggestRentCarComponent,
    SuggestRentCarAddComponent,
    SuggestRentCarEditComponent,
    SuggestRentCarViewComponent
  ]
})
export class SuggestRentCarModule { }
