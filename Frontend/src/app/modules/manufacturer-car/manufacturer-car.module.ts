import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModulesRoutingModule } from "../modules-routing.module";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CalendarModule, CheckboxModule } from "primeng/primeng";
import { FunctionsModule } from "../functions/functions.module";
import { ManufacturerCarComponent } from "./manufacturer-car/manufacturer-car.component";
import { ManufacturerCarAddComponent } from './manufacturer-car-add/manufacturer-car-add.component';
import { ManufacturerCarEditComponent } from './manufacturer-car-edit/manufacturer-car-edit.component';

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
  declarations: [ManufacturerCarComponent, ManufacturerCarAddComponent, ManufacturerCarEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManufacturerCarModule {}
