import { MaintainCarsAddComponent } from "./maintain-cars/maintain-cars-add/maintain-cars-add.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarComponent } from "./cars/car/car.component";
import { ModelCarComponent } from "./model-cars/model-car/model-car.component";
import { NewCarsComponent } from "./new-cars/new-cars/new-cars.component";
import { CarAddComponent } from "./cars/car-add/car-add.component";
import { CarEditComponent } from "./cars/car-edit/car-edit.component";
import { CarSubComponent } from "./cars/car-sub/car-sub.component";
import { ModelCarAddComponent } from "./model-cars/model-car-add/model-car-add.component";
import { ModelCarEditComponent } from "./model-cars/model-car-edit/model-car-edit.component";
import { NewCarsAddComponent } from "./new-cars/new-cars-add/new-cars-add.component";
import { NewCarsEditComponent } from "./new-cars/new-cars-edit/new-cars-edit.component";
import { NewCarsSearchComponent } from "./new-cars/new-cars-search/new-cars-search.component";
import { MaintainCarsComponent } from "./maintain-cars/maintain-cars/maintain-cars.component";
import { MaintainCarsNotifyComponent } from "./maintain-cars/maintain-cars-notify/maintain-cars-notify.component";
import { DriverEditComponent } from "./drivers/driver-edit/driver-edit.component";
import { DriverAddComponent } from "./drivers/driver-add/driver-add.component";
import { DriverComponent } from "./drivers/driver/driver.component";
import { ScheduleCarsComponent } from "./schedule-cars/schedule-cars/schedule-cars.component";
import { ScheduleCarsEditComponent } from "./schedule-cars/schedule-cars-edit/schedule-cars-edit.component";
import { ScheduleCarsAddComponent } from "./schedule-cars/schedule-cars-add/schedule-cars-add.component";
import { MaintainCarsEditComponent } from "./maintain-cars/maintain-cars-edit/maintain-cars-edit.component";
import { MaintenanceCarComponent } from "./maintenance-car/maintenance-car.component";
import { MaintenanceCarAddComponent } from "./maintenance-car/maintenance-car-add/maintenance-car-add.component";
import { MaintenanceCarEditComponent } from "./maintenance-car/maintenance-car-edit/maintenance-car-edit.component";
import { MaintenancePriceComponent } from "./maintenance-price/maintenance-price.component";
import { MaintenancePriceAddComponent } from "./maintenance-price/maintenance-price-add/maintenance-price-add.component";
import { MaintenancePriceEditComponent } from "./maintenance-price/maintenance-price-edit/maintenance-price-edit.component";
import { AccreditationRoadPriceComponent } from "./accreditation-road-price/accreditation-road-price.component";
import { AccreditationRoadPriceAddComponent } from "./accreditation-road-price/accreditation-road-price-add/accreditation-road-price-add.component";
import { AccreditationRoadPriceEditComponent } from "./accreditation-road-price/accreditation-road-price-edit/accreditation-road-price-edit.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RoadComponent } from "./road/road.component";
import { RoadAddComponent } from "./road/road-add/road-add.component";
import { RoadEditComponent } from "./road/road-edit/road-edit.component";
import { RoadViewComponent } from "./road/road-view/road-view.component";
import { InsuranceComponent } from "./insurance/insurance.component";
import { InsuranceAddComponent } from "./insurance/insurance-add/insurance-add.component";
import { InsuranceEditComponent } from "./insurance/insurance-edit/insurance-edit.component";
import { RepairCarComponent } from "./repair-car/repair-car.component";
import { RepairCarAddComponent } from "./repair-car/repair-car-add/repair-car-add.component";
import { RepairCarEditComponent } from "./repair-car/repair-car-edit/repair-car-edit.component";
import { RepairCarViewComponent } from "./repair-car/repair-car-view/repair-car-view.component";
import { SuggestRentCarComponent } from "./suggest-rent-car/suggest-rent-car.component";
import { SuggestRentCarAddComponent } from "./suggest-rent-car/suggest-rent-car-add/suggest-rent-car-add.component";
import { SuggestRentCarEditComponent } from "./suggest-rent-car/suggest-rent-car-edit/suggest-rent-car-edit.component";
import { SuggestRentCarViewComponent } from "./suggest-rent-car/suggest-rent-car-view/suggest-rent-car-view.component";
import { RentComponent } from "./rent/rent.component";
import { RentAddComponent } from "./rent/rent-add/rent-add.component";
import { RentEditComponent } from "./rent/rent-edit/rent-edit.component";
import { RentViewComponent } from "./rent/rent-view/rent-view.component";
import { UsageCarComponent } from "./usage-car/usage-car.component";
import { RoadPriceComponent } from "./road-price/road-price.component";
import { RoadPriceAddComponent } from "./road-price/road-price-add/road-price-add.component";
import { RoadPriceEditComponent } from "./road-price/road-price-edit/road-price-edit.component";
import { MaintainCarNotifyComponent } from "./maintain-car-notify/maintain-car-notify/maintain-car-notify.component";
import { MaintainCarNotifyAddComponent } from "./maintain-car-notify/maintain-car-notify-add/maintain-car-notify-add.component"
import { MaintainCarNotifyEditComponent } from "./maintain-car-notify/maintain-car-notify-edit/maintain-car-notify-edit.component"
import { DriverScheduleComponent } from "./drivers-schedule/driver-schedule/driver-schedule.component"
import { DriverScheduleAddComponent } from "./drivers-schedule/driver-schedule-add/driver-schedule-add.component"
import { DriverScheduleEditComponent } from "./drivers-schedule/driver-schedule-edit/driver-schedule-edit.component"
import { ManufacturerCarComponent } from "./manufacturer-car/manufacturer-car/manufacturer-car.component";
import { ManufacturerCarAddComponent } from "./manufacturer-car/manufacturer-car-add/manufacturer-car-add.component";
import { ManufacturerCarEditComponent } from "./manufacturer-car/manufacturer-car-edit/manufacturer-car-edit.component";
import { MaintainCarNotifyProposeComponent } from "./maintain-car-notify/maintain-car-notify-propose/maintain-car-notify-propose.component"
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        children: [
          {
            path: "car",
            component: CarComponent,
          },
          {
            path: "model-car",
            component: ModelCarComponent,
            children: [],
          },
          {
            path: "dx-cars",
            component: NewCarsComponent,
            children: [],
          },
          {
            path: "car-add",
            component: CarAddComponent,
          },
          {
            path: "car-edit",
            component: CarEditComponent,
          },
          {
            path: "car-sub",
            component: CarSubComponent,
          },
          {
            path: "model-car-add",
            component: ModelCarAddComponent,
          },
          {
            path: "model-car-edit",
            component: ModelCarEditComponent,
          },
          {
            path: "dx-car-add",
            component: NewCarsAddComponent,
          },
          {
            path: "dx-car-edit",
            component: NewCarsEditComponent,
          },
          {
            path: "dx-car-pd",
            component: NewCarsSearchComponent,
          },

          {
            path: "schedule-cars",
            component: ScheduleCarsComponent,
          },
          {
            path: "schedule-cars-add",
            component: ScheduleCarsAddComponent,
          },
          {
            path: "schedule-cars-edit",
            component: ScheduleCarsEditComponent,
          },
          {
            path: "driver",
            component: DriverComponent,
          },
          {
            path: "driver-add",
            component: DriverAddComponent,
          },
          {
            path: "driver-edit",
            component: DriverEditComponent,
          },
          {
            path: "maintain-cars",
            component: MaintainCarsComponent,
          },
          {
            path: "maintain-cars-add",
            component: MaintainCarsAddComponent,
          },
          {
            path: "maintain-cars-edit",
            component: MaintainCarsEditComponent,
          },

          {
            path: "maintenance-car",
            component: MaintenanceCarComponent,
          },
          {
            path: "maintenance-car-add",
            component: MaintenanceCarAddComponent,
          },
          {
            path: "maintenance-car-edit",
            component: MaintenanceCarEditComponent,
          },
          {
            path: "maintenance-price",
            component: MaintenancePriceComponent,
          },
          {
            path: "maintenance-price-add",
            component: MaintenancePriceAddComponent,
          },
          {
            path: "maintenance-price-edit",
            component: MaintenancePriceEditComponent,
          },
          {
            path: "accreditation-road-price",
            component: AccreditationRoadPriceComponent,
          },
          {
            path: "accreditation-road-price-add",
            component: AccreditationRoadPriceAddComponent,
          },
          {
            path: "accreditation-road-price-edit",
            component: AccreditationRoadPriceEditComponent,
          },
          {
            path: "hostDashboard",
            component: DashboardComponent,
          },
          {
            path: "road",
            component: RoadComponent,
          },
          {
            path: "road-add",
            component: RoadAddComponent,
          },
          {
            path: "road-edit",
            component: RoadEditComponent,
          },
          {
            path: "road-view",
            component: RoadViewComponent,
          },
          {
            path: "insurance",
            component: InsuranceComponent,
          },
          {
            path: "insurance-add",
            component: InsuranceAddComponent,
          },
          {
            path: "insurance-edit",
            component: InsuranceEditComponent,
          },
          {
            path: "repair-car",
            component: RepairCarComponent,
          },
          {
            path: "repair-car-add",
            component: RepairCarAddComponent,
          },
          {
            path: "repair-car-edit",
            component: RepairCarEditComponent,
          },
          {
            path: "repair-car-view",
            component: RepairCarViewComponent,
          },
          {
            path: "suggest-rent-car",
            component: SuggestRentCarComponent,
          },
          {
            path: "suggest-rent-car-add",
            component: SuggestRentCarAddComponent,
          },
          {
            path: "suggest-rent-car-edit",
            component: SuggestRentCarEditComponent,
          },
          {
            path: "suggest-rent-car-view",
            component: SuggestRentCarViewComponent,
          },
          {
            path: "rent",
            component: RentComponent,
          },
          {
            path: "rent-add",
            component: RentAddComponent,
          },
          {
            path: "rent-edit",
            component: RentEditComponent,
          },
          {
            path: "rent-view",
            component: RentViewComponent,
          },
          {
            path: "usage-car",
            component: UsageCarComponent,
          },
          {
            path: "road-price",
            component: RoadPriceComponent,
          },
          {
            path: "road-price-controller",
            component: RoadPriceAddComponent,
          },
          {
            path: "road-price-driver",
            component: RoadPriceEditComponent,
          },

          //Group9_path_and_permission
          

          //Driver-schedule
          {
            path: 'driver-schedule', component: DriverScheduleComponent,
            children: [

            ],
            data:{permission: 'Pages.Group9.HoatDongTaiXe'}
            //data: { permission: 'Pages.Administration.Group9.HoatDongTaiXe'}
          },

          {
            path: 'driver-schedule-add', component: DriverScheduleAddComponent, 
             data: { permission: 'Pages.Group9.HoatDongTaiXe.Add'}
          },
          {
            path: 'driver-schedule-edit', component: DriverScheduleEditComponent,
             data: { permission: 'Pages.Group9.HoatDongTaiXe.Update'}
          },

          //Maintain-car-Notify
          {
            path: 'maintain-cars-notify', component: MaintainCarNotifyComponent,
            children: [

            ],
             data: { permission: 'Pages.Group9.BaoTri'}
          },
          {
            path: 'maintain-cars-notify-add', component: MaintainCarNotifyAddComponent,
            data: { permission: 'Pages.Group9.BaoTri.Add'}
          },
          {
            path: 'maintain-cars-notify-edit', component: MaintainCarNotifyEditComponent,
            data: { permission: 'Pages.Group9.BaoTri.Update'}
          },
          {
            path: "maintain-cars-notify-propose",
            component: MaintainCarNotifyProposeComponent,
            data: { permission: 'Pages.Group9.BaoTri.Add'}
          },


          //Brand-cars
          {
            path: "manufacturer-car",
            component: ManufacturerCarComponent,
            data: { permission: 'Pages.Group9.Hang'}
          },
          {
            path: "manufacturer-car-add",
            component: ManufacturerCarAddComponent,
            data: { permission: 'Pages.Group9.Hang.Add'}
          },
          {
            path: "manufacturer-car-edit",
            component: ManufacturerCarEditComponent,
            data: { permission: 'Pages.Group9.Hang.Update'}
          },

          //Block area

          {
            path: 'car-maintenance-notify-edit', component: MaintainCarNotifyComponent
          },
          {
            path: 'car-maintenance-notify-search', component: MaintainCarNotifyComponent

          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ModulesRoutingModule { }
