import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-schedule-car-sub-group4',
    templateUrl: './schedule-car-sub-group4.component.html',
    styleUrls: ['./schedule-car-sub-group4.component.less', '../../style.less']
})
export class ScheduleCarSubGroup4Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
