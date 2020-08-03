import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { DriverSubComponent } from './driver-sub/driver-sub.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule } from 'primeng/primeng';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
    imports: [
        CommonModule,
        ModulesRoutingModule,
        FormsModule,
        TableModule,
        CalendarModule,
        CheckboxModule,
        FunctionsModule
    ],
    declarations: [DriverComponent, DriverAddComponent, DriverSubComponent, DriverEditComponent]
})
export class DriversModule { }
