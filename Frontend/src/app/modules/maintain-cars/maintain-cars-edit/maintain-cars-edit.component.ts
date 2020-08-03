import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-maintain-cars',
  templateUrl: './maintain-cars-edit.component.html',
  styleUrls: ['./maintain-cars-edit.component.css']
})
export class MaintainCarsEditComponent extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
