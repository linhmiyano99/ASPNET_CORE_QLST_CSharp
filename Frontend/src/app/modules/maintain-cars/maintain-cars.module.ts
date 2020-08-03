import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainCarsComponent } from './maintain-cars/maintain-cars.component';
import { MaintainCarsEditComponent } from './maintain-cars-edit/maintain-cars-edit.component';
import { MaintainCarsAddComponent } from './maintain-cars-add/maintain-cars-add.component';
import { MaintainCarsNotifyComponent } from './maintain-cars-notify/maintain-cars-notify.component';
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
    declarations: [
        MaintainCarsComponent,
        MaintainCarsEditComponent,
        MaintainCarsAddComponent,
        MaintainCarsNotifyComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaintainCarsModule { }
