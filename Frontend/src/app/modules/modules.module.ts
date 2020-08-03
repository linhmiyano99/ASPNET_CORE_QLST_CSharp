import { ManufacturerCarModule } from './manufacturer-car/manufacturer-car.module';
import { NgModule } from "@angular/core";

import {
    MenuClientServiceProxy,
    DemoModelServiceProxy,
} from "@shared/service-proxies/service-proxies";

import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { CalendarModule } from "primeng/components/calendar/calendar";
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ModulesRoutingModule } from "./modules-routing.module";
import { ModulesServiceProxyModule } from "./modules.service-proxy.module";
import { CarsModule } from './cars/cars.module';
import { ModelCarsModule } from './model-cars/model-cars.module';
import { NewCarsModule } from './new-cars/new-cars.module';
import { ScheduleCarsModule } from './schedule-cars/schedule-cars.module';
import { DriversModule } from './drivers/drivers.module';
import { MaintainCarsModule } from './maintain-cars/maintain-cars.module';
import { RouterModule } from "@angular/router";
import { FunctionsModule } from './functions/functions.module';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaintenanceCarModule } from "./maintenance-car/maintenance-car.module";
import { MaintenancePriceModule } from "./maintenance-price/maintenance-price.module";
import { AccreditationRoadPriceModule } from "./accreditation-road-price/accreditation-road-price.module";
import { RoadModule } from './road/road.module';
import { InsuranceModule } from './insurance/insurance.module';
import { RepairCarModule } from './repair-car/repair-car.module';
import { SuggestRentCarModule } from './suggest-rent-car/suggest-rent-car.module';
import { RentModule } from './rent/rent.module';
import { UsageCarComponent } from './usage-car/usage-car.component';
import { RoadPriceModule } from './road-price/road-price.module';
import { MaintainCarNotifyModule} from './maintain-car-notify/maintain-car-notify.module';
import { DriversScheduleModule} from './drivers-schedule/drivers-schedule.module'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        CheckboxModule,
        ConfirmDialogModule,
        ModulesRoutingModule,
        ModulesServiceProxyModule,
        CarsModule,
        ModelCarsModule,
        NewCarsModule,
        DriversModule,
        MaintainCarsModule,
        ScheduleCarsModule,
        RouterModule,
        FunctionsModule,
        MaintenanceCarModule,
        MaintenancePriceModule,
        AccreditationRoadPriceModule,
        RoadModule,
        InsuranceModule,
        RepairCarModule,
        SuggestRentCarModule,
        RentModule,
        RoadPriceModule,
        MaintainCarNotifyModule,
        DriversScheduleModule,
        ManufacturerCarModule
    ],
    declarations: [
        DashboardComponent,
        UsageCarComponent
    ],
    providers: [ConfirmationService]
})
export class ModulesModule { }
