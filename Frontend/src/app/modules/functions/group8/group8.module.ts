import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DxCarEditGroup8Component } from "./dx-car-edit-group8/dx-car-edit-group8.component";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";

import { Group8ServiceProxyModule } from "./group8.service-proxy.module";
import { InsuranceEditGroup8Component } from "./insurance-edit-group8/insurance-edit-group8.component";
import { InsuranceAddGroup8Component } from "./insurance-add-group8/insurance-add-group8.component";
import { InsuranceManagementGroup8Component } from "./insurance-management-group8/insurance-management-group8.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextareaModule,
    Group8ServiceProxyModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DxCarEditGroup8Component,
    InsuranceEditGroup8Component,
    InsuranceAddGroup8Component,
    InsuranceManagementGroup8Component,
  ],
  exports: [
    DxCarEditGroup8Component,
    InsuranceEditGroup8Component,
    InsuranceAddGroup8Component,
    InsuranceManagementGroup8Component,
  ],
})
export class Group8Module {}
