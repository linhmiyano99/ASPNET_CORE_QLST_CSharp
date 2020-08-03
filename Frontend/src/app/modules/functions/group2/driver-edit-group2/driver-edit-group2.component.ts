import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-driver-edit-group2',
    templateUrl: './driver-edit-group2.component.html',
    styleUrls: ['./driver-edit-group2.component.less', '../../style.less']
})
export class DriverEditGroup2Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
