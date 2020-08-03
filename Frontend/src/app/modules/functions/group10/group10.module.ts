import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarAddGroup10Component } from "./car-add-group10/car-add-group10.component";
import { MaintainCarsAddGroup10Component } from "./maintain-cars-add-group10/maintain-cars-add-group10.component";
import { MaintainCarsManagementGroup10Component } from "./maintain-cars-management-group10/maintain-cars-management-group10.component";
import { MaintainCarsEditGroup10Component } from "./maintain-cars-edit-group10/maintain-cars-edit-group10.component";
import { MaintainCarsNotifyGroup10Component } from "./maintain-cars-notify-group10/maintain-cars-notify-group10.component";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/primeng";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { Group10ServiceProxyModule } from "./group10.service-proxy.module";
import { KeyFilterModule } from "primeng/keyfilter";
import { RepairCarManagementGroup10Component } from "./repair-car-management-group10/repair-car-management-group10.component";
import { RepairCarAddGroup10Component } from "./repair-car-add-group10/repair-car-add-group10.component";
import { RepairCarEditGroup10Component } from "./repair-car-edit-group10/repair-car-edit-group10.component";
import { RepairCarViewGroup10Component } from "./repair-car-view-group10/repair-car-view-group10.component";
import { SuggestRentCarManagementGroup10Component } from "./suggest-rent-car-management-group10/suggest-rent-car-management-group10.component";
import { SuggestRentCarAddGroup10Component } from "./suggest-rent-car-add-group10/suggest-rent-car-add-group10.component";
import { SuggestRentCarEditGroup10Component } from "./suggest-rent-car-edit-group10/suggest-rent-car-edit-group10.component";
import { SuggestRentCarViewGroup10Component } from "./suggest-rent-car-view-group10/suggest-rent-car-view-group10.component";
import { RentManagementGroup10Component } from "./rent-management-group10/rent-management-group10.component";
import { RentAddGroup10Component } from "./rent-add-group10/rent-add-group10.component";
import { RentEditGroup10Component } from "./rent-edit-group10/rent-edit-group10.component";
import { RentViewGroup10Component } from "./rent-view-group10/rent-view-group10.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    KeyFilterModule,
    Group10ServiceProxyModule,
  ],
  declarations: [
    CarAddGroup10Component,
    MaintainCarsAddGroup10Component,
    MaintainCarsManagementGroup10Component,
    MaintainCarsEditGroup10Component,
    MaintainCarsNotifyGroup10Component,
    RepairCarManagementGroup10Component,
    RepairCarAddGroup10Component,
    RepairCarEditGroup10Component,
    RepairCarViewGroup10Component,
    SuggestRentCarManagementGroup10Component,
    SuggestRentCarAddGroup10Component,
    SuggestRentCarEditGroup10Component,
    SuggestRentCarViewGroup10Component,
    RentManagementGroup10Component,
    RentAddGroup10Component,
    RentEditGroup10Component,
    RentViewGroup10Component,
  ],
  exports: [
    CarAddGroup10Component,
    MaintainCarsAddGroup10Component,
    MaintainCarsEditGroup10Component,
    MaintainCarsManagementGroup10Component,
    RepairCarManagementGroup10Component,
    RepairCarAddGroup10Component,
    RepairCarEditGroup10Component,
    RepairCarViewGroup10Component,
    SuggestRentCarManagementGroup10Component,
    SuggestRentCarAddGroup10Component,
    SuggestRentCarEditGroup10Component,
    SuggestRentCarViewGroup10Component,
    RentManagementGroup10Component,
    RentAddGroup10Component,
    RentEditGroup10Component,
    RentViewGroup10Component,
  ],
})
export class Group10Module {}
