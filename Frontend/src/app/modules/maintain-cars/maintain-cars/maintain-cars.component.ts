import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-cars',
  templateUrl: './maintain-cars.component.html',
  styleUrls: ['./maintain-cars.component.less']
})
export class MaintainCarsComponent extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
