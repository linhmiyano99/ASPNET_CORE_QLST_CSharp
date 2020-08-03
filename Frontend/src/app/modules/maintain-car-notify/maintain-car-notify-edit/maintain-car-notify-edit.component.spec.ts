import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarNotifyEditComponent } from './maintain-car-notify-edit.component';

describe('MaintainCarNotifyEditComponent', () => {
  let component: MaintainCarNotifyEditComponent;
  let fixture: ComponentFixture<MaintainCarNotifyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarNotifyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarNotifyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
