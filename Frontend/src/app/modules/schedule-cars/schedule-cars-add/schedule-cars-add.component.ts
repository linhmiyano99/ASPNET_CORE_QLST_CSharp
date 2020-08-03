import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-schedule-cars-add',
  templateUrl: './schedule-cars-add.component.html',
  styleUrls: ['./schedule-cars-add.component.css', '../schedule-cars/schedule-cars.component.less']
})
export class ScheduleCarsAddComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
