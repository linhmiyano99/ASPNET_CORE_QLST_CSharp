import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCarAddComponent } from './model-car-add/model-car-add.component';
import { ModelCarEditComponent } from './model-car-edit/model-car-edit.component';
import { ModelCarComponent } from './model-car/model-car.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CheckboxModule, CalendarModule } from 'primeng/primeng';
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
  declarations: [ModelCarAddComponent, ModelCarEditComponent, ModelCarComponent]
})
export class ModelCarsModule { }
