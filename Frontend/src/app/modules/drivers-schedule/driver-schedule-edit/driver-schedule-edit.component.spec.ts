import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverScheduleEditComponent } from './driver-schedule-edit.component';

describe('DriverScheduleEditComponent', () => {
  let component: DriverScheduleEditComponent;
  let fixture: ComponentFixture<DriverScheduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverScheduleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverScheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
