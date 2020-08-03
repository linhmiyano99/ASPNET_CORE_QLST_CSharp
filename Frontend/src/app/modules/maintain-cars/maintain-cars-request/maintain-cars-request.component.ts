import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
    selector: 'app-maintain-cars-request',
    templateUrl: './maintain-cars-request.component.html',
    styleUrls: ['./maintain-cars-request.component.css', '../maintain-cars/maintain-cars.component.less']
})
export class MaintainCarsRequestComponent extends AppComponentBase implements OnInit {

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

}
