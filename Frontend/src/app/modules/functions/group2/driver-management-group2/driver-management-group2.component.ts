import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-driver-management-group2',
    templateUrl: './driver-management-group2.component.html',
    styleUrls: ['./driver-management-group2.component.less', '../../style.less']
})
export class DriverManagementGroup2Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
