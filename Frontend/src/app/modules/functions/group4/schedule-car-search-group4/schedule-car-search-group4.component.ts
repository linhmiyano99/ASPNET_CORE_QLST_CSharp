import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-schedule-car-search-group4',
    templateUrl: './schedule-car-search-group4.component.html',
    styleUrls: ['./schedule-car-search-group4.component.less', '../../style.less']
})
export class ScheduleCarSearchGroup4Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
