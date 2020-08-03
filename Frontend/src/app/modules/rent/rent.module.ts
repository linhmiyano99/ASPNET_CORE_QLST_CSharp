import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentComponent } from './rent.component';
import { RentAddComponent } from './rent-add/rent-add.component';
import { RentEditComponent } from './rent-edit/rent-edit.component';
import { RentViewComponent } from './rent-view/rent-view.component';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
  imports: [
    CommonModule,
    FunctionsModule
  ],
  declarations: [RentComponent, RentAddComponent, RentEditComponent, RentViewComponent]
})
export class RentModule { }
