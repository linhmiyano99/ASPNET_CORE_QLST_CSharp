import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ScheduleCarEditGroup4Component } from "./schedule-car-edit-group4/schedule-car-edit-group4.component";
import { ScheduleCarAddGroup4Component } from "./schedule-car-add-group4/schedule-car-add-group4.component";
import { ScheduleCarManagementGroup4Component } from "./schedule-car-management-group4/schedule-car-management-group4.component";
import { ModelCarManagementGroup4Component } from "./model-car-management-group4/model-car-management-group4.component";
import { Group4ServiceProxyModule } from "./group4.service-proxy.module";
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { AutoCompleteModule } from "primeng/primeng";
import { UtilsModule } from "@shared/utils/utils.module";
import { RoadsManagementGroup4Component } from "./roads-management-group4/roads-management-group4.component";
import { RoadsViewGroup4Component } from "./roads-view-group4/roads-view-group4.component";
import { RoadsAddGroup4Component } from "./roads-add-group4/roads-add-group4.component";
import { RoadsEditGroup4Component } from "./roads-edit-group4/roads-edit-group4.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RouterModule,
    UtilsModule,
    AutoCompleteModule,
    CalendarModule,
    Group4ServiceProxyModule,
  ],
  declarations: [
    ModelCarManagementGroup4Component,
    ScheduleCarManagementGroup4Component,
    ScheduleCarAddGroup4Component,
    ScheduleCarEditGroup4Component,
    RoadsManagementGroup4Component,
    RoadsViewGroup4Component,
    RoadsAddGroup4Component,
    RoadsEditGroup4Component,
  ],
  exports: [
    ModelCarManagementGroup4Component,
    ScheduleCarManagementGroup4Component,
    ScheduleCarAddGroup4Component,
    ScheduleCarEditGroup4Component,
    RoadsManagementGroup4Component,
    RoadsViewGroup4Component,
    RoadsAddGroup4Component,
    RoadsEditGroup4Component,
  ],
})
export class Group4Module {}
