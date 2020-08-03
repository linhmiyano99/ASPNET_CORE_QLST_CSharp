import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-maintain-cars-add-group10',
    templateUrl: './maintain-cars-add-group10.component.html',
    styleUrls: ['./maintain-cars-add-group10.component.css']
})
export class MaintainCarsAddGroup10Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
