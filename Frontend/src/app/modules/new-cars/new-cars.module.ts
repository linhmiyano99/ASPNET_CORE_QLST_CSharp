import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule } from 'primeng/primeng';
import { NewCarsAddComponent } from './new-cars-add/new-cars-add.component';
import { NewCarsEditComponent } from './new-cars-edit/new-cars-edit.component';
import { NewCarsSearchComponent } from './new-cars-search/new-cars-search.component';
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
  declarations: [NewCarsComponent, NewCarsAddComponent, NewCarsEditComponent, NewCarsSearchComponent]
})
export class NewCarsModule { }
