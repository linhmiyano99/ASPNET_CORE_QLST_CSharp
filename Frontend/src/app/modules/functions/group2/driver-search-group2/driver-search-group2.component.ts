import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
    selector: 'app-driver-search-group2',
    templateUrl: './driver-search-group2.component.html',
    styleUrls: ['./driver-search-group2.component.less', '../../style.less']
})
export class DriverSearchGroup2Component extends AppComponentBase implements OnInit {


    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

}
