import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-driver-schedule',
  templateUrl: './driver-schedule.component.html',
  styleUrls: ['./driver-schedule.component.less']
})
export class DriverScheduleComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
