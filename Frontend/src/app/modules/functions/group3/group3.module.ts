import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DxCarAddGroup3Component } from "./dx-car-add-group3/dx-car-add-group3.component";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { Group3ServiceProxyModule } from "./group3.service-proxy.module";
import { MaintenancePriceGroup3Component } from "./maintenance-price-group3/maintenance-price-group3.component";
import { MaintenancePriceAddGroup3Component } from "./maintenance-price-add-group3/maintenance-price-add-group3.component";
import { MaintenancePriceEditGroup3Component } from "./maintenance-price-edit-group3/maintenance-price-edit-group3.component";
import { UsegeCarGroup3Component } from './usege-car-group3/usege-car-group3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextareaModule,
    Group3ServiceProxyModule
  ],
  declarations: [
    DxCarAddGroup3Component,
    MaintenancePriceGroup3Component,
    MaintenancePriceAddGroup3Component,
    MaintenancePriceEditGroup3Component,
    UsegeCarGroup3Component,
  ],
  exports: [
    DxCarAddGroup3Component,
    MaintenancePriceGroup3Component,
    MaintenancePriceAddGroup3Component,
    MaintenancePriceEditGroup3Component,
    UsegeCarGroup3Component,
  ],
})
export class Group3Module {}
