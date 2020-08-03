import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-driver-schedule-edit',
  templateUrl: './driver-schedule-edit.component.html',
  styleUrls: ['./driver-schedule-edit.component.less']
})
export class DriverScheduleEditComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
