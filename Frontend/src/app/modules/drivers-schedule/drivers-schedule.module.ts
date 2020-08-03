import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule } from 'primeng/primeng';
import { FunctionsModule } from '../functions/functions.module';
import { DriverScheduleComponent} from './driver-schedule/driver-schedule.component'
import { DriverScheduleAddComponent} from './driver-schedule-add/driver-schedule-add.component'
import { DriverScheduleEditComponent} from './driver-schedule-edit/driver-schedule-edit.component'
import { ModulesRoutingModule } from '../modules-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        CheckboxModule,
        FunctionsModule,
        CommonModule,
        ModulesRoutingModule,
 
    ],
    declarations: [
        DriverScheduleComponent,
        DriverScheduleEditComponent,
        DriverScheduleAddComponent
    ]
})
export class DriversScheduleModule { }
