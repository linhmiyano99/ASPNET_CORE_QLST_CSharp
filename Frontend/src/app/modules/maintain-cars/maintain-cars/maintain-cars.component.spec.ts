import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsComponent } from './maintain-cars.component';

describe('MaintainCarsComponent', () => {
  let component: MaintainCarsComponent;
  let fixture: ComponentFixture<MaintainCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
