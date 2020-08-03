import { Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.less']
})
export class DriverComponent extends AppComponentBase implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
