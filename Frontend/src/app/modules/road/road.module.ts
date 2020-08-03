import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoadComponent } from "./road.component";
import { RoadAddComponent } from "./road-add/road-add.component";
import { RoadEditComponent } from "./road-edit/road-edit.component";
import { RoadViewComponent } from "./road-view/road-view.component";
import { ModulesRoutingModule } from "../modules-routing.module";
import { FunctionsModule } from "../functions/functions.module";

@NgModule({
  imports: [CommonModule, ModulesRoutingModule, FunctionsModule],
  declarations: [
    RoadComponent,
    RoadAddComponent,
    RoadEditComponent,
    RoadViewComponent,
  ],
})
export class RoadModule {}
