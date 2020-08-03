import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModulesRoutingModule } from "../modules-routing.module";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CalendarModule, CheckboxModule } from "primeng/primeng";
import { FunctionsModule } from "../functions/functions.module";
import { MaintenancePriceComponent } from './maintenance-price.component';
import { MaintenancePriceAddComponent } from './maintenance-price-add/maintenance-price-add.component';
import { MaintenancePriceEditComponent } from './maintenance-price-edit/maintenance-price-edit.component';

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
  declarations: [MaintenancePriceComponent, MaintenancePriceAddComponent, MaintenancePriceEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaintenancePriceModule {}
