import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarSubComponent } from './car-sub/car-sub.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule } from 'primeng/primeng';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    FunctionsModule
  ],
  declarations: [CarComponent, CarAddComponent, CarSubComponent, CarEditComponent]
})
export class CarsModule { }
