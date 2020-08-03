import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-car-notify',
  templateUrl: './maintain-car-notify.component.html',
  styleUrls: ['./maintain-car-notify.component.less']
})
export class MaintainCarNotifyComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
