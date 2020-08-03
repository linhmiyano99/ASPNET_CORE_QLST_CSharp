import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-driver-add-group2',
    templateUrl: './driver-add-group2.component.html',
    styleUrls: ['./driver-add-group2.component.less', '../../style.less']
})
export class DriverAddGroup2Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
