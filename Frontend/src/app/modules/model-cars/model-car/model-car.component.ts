import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-model-car',
  templateUrl: './model-car.component.html',
  styleUrls: ['./model-car.component.less']
})
export class ModelCarComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
