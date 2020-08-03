import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelCarAddGroup9Component } from './model-car-add-group9/model-car-add-group9.component';
import { MaintainCarsNotifyAddComponent} from "./maintain-cars-notify-add/maintain-cars-notify-add.component"
import { MaintainCarsNotifyEditComponent} from "./maintain-cars-notify-edit/maintain-cars-notify-edit.component"
import { MaintainCarNotifyProposeComponent } from "./maintain-car-notify-propose/maintain-car-notify-propose.component"
import { MaintainCarsNotifyComponent } from "./maintain-cars-notify/maintain-cars-notify.component"
import { Group9ServiceProxyModule } from './group9.service-proxy.module';
import { TableModule } from "primeng/table";
import { AutoCompleteModule } from 'primeng/primeng';
import { UtilsModule } from "@shared/utils/utils.module";
import { DriverScheduleComponent} from "./driver-schedule/driver-schedule.component"
import { DriverScheduleAddComponent} from "./driver-schedule-add/driver-schedule-add.component"
import { DriverScheduleEditComponent} from "./driver-schedule-edit/driver-schedule-edit.component"
import { InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/primeng';
import { DialogModule} from 'primeng/dialog';
import { ButtonModule} from 'primeng/button';
import { CalendarModule} from 'primeng/calendar';
import { ManufacturerCarComponentGroup9} from "./manufacturer-car-group9/manufacturer-car-group9.component"
import { ManufacturerCarAddComponentGroup9 } from './manufacturer-car-add-group9/manufacturer-car-add-group9.component';
import { ManufacturerCarEditComponentGroup9 } from './manufacturer-car-edit-group9/manufacturer-car-edit-group9.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Group9ServiceProxyModule,
    TableModule,
    RouterModule,
    UtilsModule,
    AutoCompleteModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    
  ],

  declarations: [ModelCarAddGroup9Component, MaintainCarsNotifyAddComponent, MaintainCarsNotifyEditComponent, MaintainCarsNotifyComponent,
  DriverScheduleEditComponent,DriverScheduleComponent,DriverScheduleAddComponent,ManufacturerCarComponentGroup9, 
  ManufacturerCarAddComponentGroup9,ManufacturerCarEditComponentGroup9,MaintainCarNotifyProposeComponent],  
   
  exports:[ModelCarAddGroup9Component,MaintainCarsNotifyAddComponent,MaintainCarsNotifyEditComponent,MaintainCarsNotifyComponent,
  DriverScheduleEditComponent,DriverScheduleComponent,DriverScheduleAddComponent,ManufacturerCarComponentGroup9,
  ManufacturerCarAddComponentGroup9,ManufacturerCarEditComponentGroup9,MaintainCarNotifyProposeComponent]
  

})

export class Group9Module { }

