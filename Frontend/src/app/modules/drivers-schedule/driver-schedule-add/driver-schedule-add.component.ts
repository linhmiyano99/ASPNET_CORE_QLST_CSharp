import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-driver-schedule-add',
  templateUrl: './driver-schedule-add.component.html',
  styleUrls: ['./driver-schedule-add.component.less']
})
export class DriverScheduleAddComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
