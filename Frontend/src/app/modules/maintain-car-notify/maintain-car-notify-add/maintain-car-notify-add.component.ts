import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";
@Component({
  selector: 'app-maintain-car-notify-add',
  templateUrl: './maintain-car-notify-add.component.html',
  styleUrls: ['./maintain-car-notify-add.component.css']
})
export class MaintainCarNotifyAddComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
