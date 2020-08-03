import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RepairCarComponent } from "./repair-car.component";
import { RepairCarAddComponent } from "./repair-car-add/repair-car-add.component";
import { RepairCarEditComponent } from "./repair-car-edit/repair-car-edit.component";
import { RepairCarViewComponent } from "./repair-car-view/repair-car-view.component";
import { FunctionsModule } from "../functions/functions.module";

@NgModule({
  imports: [CommonModule, FunctionsModule],
  declarations: [
    RepairCarComponent,
    RepairCarAddComponent,
    RepairCarEditComponent,
    RepairCarViewComponent,
  ],
})
export class RepairCarModule {}
