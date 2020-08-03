import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-cars-management-group10',
  templateUrl: './maintain-cars-management-group10.component.html',
  styleUrls: ['./maintain-cars-management-group10.component.less']
})
export class MaintainCarsManagementGroup10Component extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
