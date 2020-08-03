import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainCarNotifyAddComponent } from './maintain-car-notify-add/maintain-car-notify-add.component';
import { MaintainCarNotifyEditComponent } from './maintain-car-notify-edit/maintain-car-notify-edit.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CheckboxModule, CalendarModule } from 'primeng/primeng';
import { FunctionsModule } from '../functions/functions.module';
import { MaintainCarNotifyComponent } from './maintain-car-notify/maintain-car-notify.component';
import { MaintainCarNotifyProposeComponent } from './maintain-car-notify-propose/maintain-car-notify-propose.component'

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
  declarations: [MaintainCarNotifyAddComponent, MaintainCarNotifyEditComponent, 
    MaintainCarNotifyComponent,MaintainCarNotifyProposeComponent]
})
export class MaintainCarNotifyModule { }
