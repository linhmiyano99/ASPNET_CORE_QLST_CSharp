import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DxCarManagementGroup5Component } from "./dx-car-management-group5/dx-car-management-group5.component";
import { CarManagementGroup5Component } from "./car-management-group5/car-management-group5.component";
import {
  DropdownModule,
  AutoCompleteModule,
  CalendarModule,
} from "primeng/primeng";
import { Group5ServiceProxyModule } from "./group5.service-proxy.module";
import { TableModule } from "primeng/table";
import { UtilsModule } from "@shared/utils/utils.module";
import { DashboardGroup5Group6Component } from "./dashboard-group5-group6/dashboard-group5-group6.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    Group5ServiceProxyModule,
    TableModule,
    AutoCompleteModule,
    UtilsModule,
    ReactiveFormsModule,
    CalendarModule,
  ],
  declarations: [
    CarManagementGroup5Component,
    DxCarManagementGroup5Component,
    DashboardGroup5Group6Component,
  ],
  exports: [
    CarManagementGroup5Component,
    DxCarManagementGroup5Component,
    DashboardGroup5Group6Component,
  ],
})
export class Group5Module {}
