import { DriverSubGroup2Component } from './driver-sub-group2/driver-sub-group2.component';
import { DriverSearchGroup2Component } from './driver-search-group2/driver-search-group2.component';
import { DriverEditGroup2Component } from './driver-edit-group2/driver-edit-group2.component';
import { DriverAddGroup2Component } from './driver-add-group2/driver-add-group2.component';
import { Group2RoutingModule } from './group2.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarSubGroup2Component } from './car-sub-group2/car-sub-group2.component';
import { Group2ServiceProxyModule } from './group2.service-proxy.module';
import { DriverManagementGroup2Component } from './driver-management-group2/driver-management-group2.component';

@NgModule({
    imports: [
        Group2RoutingModule,
        CommonModule,
        FormsModule,
        RouterModule,
        Group2ServiceProxyModule
        
    ],
    declarations: [
        CarSubGroup2Component,
        DriverAddGroup2Component,
        DriverEditGroup2Component,
        DriverSearchGroup2Component,
        DriverSubGroup2Component,
        DriverManagementGroup2Component
    ],
    exports: [
        CarSubGroup2Component,
        DriverAddGroup2Component,
        DriverEditGroup2Component,
        DriverSearchGroup2Component,
        DriverSubGroup2Component,
        DriverManagementGroup2Component
    ],
})
export class Group2Module { }
