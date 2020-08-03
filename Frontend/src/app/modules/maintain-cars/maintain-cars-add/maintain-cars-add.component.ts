import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-cars',
  templateUrl: './maintain-cars-add.component.html',
  styleUrls: ['./maintain-cars-add.component.css']
})
export class MaintainCarsAddComponent extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
