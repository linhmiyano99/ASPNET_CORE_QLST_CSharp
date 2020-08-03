import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModulesRoutingModule } from "../modules-routing.module";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CalendarModule, CheckboxModule } from "primeng/primeng";
import { FunctionsModule } from "../functions/functions.module";
import { MaintenanceCarComponent } from "./maintenance-car.component";
import { MaintenanceCarAddComponent } from './maintenance-car-add/maintenance-car-add.component';
import { MaintenanceCarEditComponent } from './maintenance-car-edit/maintenance-car-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    FunctionsModule,
  ],
  declarations: [MaintenanceCarComponent, MaintenanceCarAddComponent, MaintenanceCarEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaintenanceCarModule {}
