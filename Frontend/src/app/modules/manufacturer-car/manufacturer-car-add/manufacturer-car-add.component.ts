import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-manufacturer-car-add',
  templateUrl: './manufacturer-car-add.component.html',
  styleUrls: ['./manufacturer-car-add.component.css']
})
export class ManufacturerCarAddComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
