import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModulesRoutingModule } from "../modules-routing.module";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CalendarModule, CheckboxModule } from "primeng/primeng";
import { FunctionsModule } from "../functions/functions.module";
import { AccreditationRoadPriceComponent } from './accreditation-road-price.component';
import { AccreditationRoadPriceAddComponent } from './accreditation-road-price-add/accreditation-road-price-add.component';
import { AccreditationRoadPriceEditComponent } from './accreditation-road-price-edit/accreditation-road-price-edit.component';

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
  declarations: [AccreditationRoadPriceComponent, AccreditationRoadPriceAddComponent, AccreditationRoadPriceEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccreditationRoadPriceModule {}
