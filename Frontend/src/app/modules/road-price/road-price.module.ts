import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoadPriceComponent } from "./road-price.component";
import { RoadPriceAddComponent } from "./road-price-add/road-price-add.component";
import { RoadPriceEditComponent } from "./road-price-edit/road-price-edit.component";
import { FunctionsModule } from "../functions/functions.module";

@NgModule({
  imports: [CommonModule, FunctionsModule],
  declarations: [
    RoadPriceComponent,
    RoadPriceAddComponent,
    RoadPriceEditComponent,
  ],
})
export class RoadPriceModule {}
