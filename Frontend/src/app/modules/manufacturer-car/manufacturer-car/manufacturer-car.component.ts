import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-manufacturer-car',
  templateUrl: './manufacturer-car.component.html',
  styleUrls: ['./manufacturer-car.component.less']
})
export class ManufacturerCarComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
