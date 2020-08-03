import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-model-car-edit-group1',
  templateUrl: './model-car-edit-group1.component.html',
  styleUrls: ['./model-car-edit-group1.component.css', '../../style.less']
})
export class ModelCarEditGroup1Component extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
