import { Component, OnInit, Injector } from '@angular/core';
import {AppComponentBase} from '@shared/common/app-component-base'

@Component({
  selector: 'app-maintain-car-notify-edit',
  templateUrl: './maintain-car-notify-edit.component.html',
  styleUrls: ['./maintain-car-notify-edit.component.css']
})
export class MaintainCarNotifyEditComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
