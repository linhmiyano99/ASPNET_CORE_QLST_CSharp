import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DxCarPdGroup7Component } from "./dx-car-pd-group7/dx-car-pd-group7.component";
import {
  ScrollPanelModule,
  PanelModule,
  InputTextareaModule,
  DialogModule,
  OrderListModule,
  RadioButtonModule,
} from "primeng/primeng";
import { Group7ServiceProxyModule } from "./group7.service-proxy.module";
import { AccreditationRoadPriceGroup7Group8Component } from "./accreditation-road-price-group7-group8/accreditation-road-price-group7-group8.component";
import { AccreditationRoadPriceAddGroup7Group8Component } from "./accreditation-road-price-add-group7-group8/accreditation-road-price-add-group7-group8.component";
import { AccreditationRoadPriceEditGroup7Group8Component } from "./accreditation-road-price-edit-group7-group8/accreditation-road-price-edit-group7-group8.component";
import { RoadPriceGroup7Component } from './road-price-group7/road-price-group7.component';
import { RoadPriceAddGroup7Component } from './road-price-add-group7/road-price-add-group7.component';
import { RoadPriceEditGroup7Component } from './road-price-edit-group7/road-price-edit-group7.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ScrollPanelModule,
    PanelModule,
    InputTextareaModule,
    DialogModule,
    OrderListModule,
    RadioButtonModule,
    Group7ServiceProxyModule,
    ReactiveFormsModule
  ],
  declarations: [
    DxCarPdGroup7Component,
    AccreditationRoadPriceGroup7Group8Component,
    AccreditationRoadPriceAddGroup7Group8Component,
    AccreditationRoadPriceEditGroup7Group8Component,
    RoadPriceGroup7Component,
    RoadPriceAddGroup7Component,
    RoadPriceEditGroup7Component,
  ],
  exports: [
    DxCarPdGroup7Component,
    AccreditationRoadPriceGroup7Group8Component,
    AccreditationRoadPriceAddGroup7Group8Component,
    AccreditationRoadPriceEditGroup7Group8Component,
    RoadPriceGroup7Component,
    RoadPriceAddGroup7Component,
    RoadPriceEditGroup7Component,
  ],
})
export class Group7Module {}
