import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-car-notify-propose',
  templateUrl: './maintain-car-notify-propose.component.html',
  styleUrls: ['./maintain-car-notify-propose.component.less']
})
export class MaintainCarNotifyProposeComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
