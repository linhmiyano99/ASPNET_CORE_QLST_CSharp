import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverScheduleAddComponent } from './driver-schedule-add.component';

describe('DriverScheduleAddComponent', () => {
  let component: DriverScheduleAddComponent;
  let fixture: ComponentFixture<DriverScheduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverScheduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
