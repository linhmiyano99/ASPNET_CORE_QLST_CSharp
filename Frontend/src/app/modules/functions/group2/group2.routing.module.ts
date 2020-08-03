import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarSubGroup2Component} from "./car-sub-group2/car-sub-group2.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                children: [
                    {
                        path: "car",
                        component: CarSubGroup2Component,
                        data: { permission: "Pages.Group2.Car" },
                    },
                    {

                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class Group2RoutingModule {}
