import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-schedule-cars',
  templateUrl: './schedule-cars.component.html',
  styleUrls: ['./schedule-cars.component.less']
})
export class ScheduleCarsComponent extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
