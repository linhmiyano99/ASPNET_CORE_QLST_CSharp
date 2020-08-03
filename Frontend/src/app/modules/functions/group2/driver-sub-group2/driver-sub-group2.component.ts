import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-driver-sub-group2',
    templateUrl: './driver-sub-group2.component.html',
    styleUrls: ['./driver-sub-group2.component.less', '../../style.less']
})
export class DriverSubGroup2Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
