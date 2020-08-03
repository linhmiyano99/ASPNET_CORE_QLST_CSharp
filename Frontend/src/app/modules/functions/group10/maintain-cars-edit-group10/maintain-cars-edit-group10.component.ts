import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-cars-edit-group10',
  templateUrl: './maintain-cars-edit-group10.component.html',
  styleUrls: ['./maintain-cars-edit-group10.component.css']
})
export class MaintainCarsEditGroup10Component extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
