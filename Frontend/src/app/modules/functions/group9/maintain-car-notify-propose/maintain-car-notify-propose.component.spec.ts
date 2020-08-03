import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarNotifyProposeComponent } from './maintain-car-notify-propose.component';

describe('MaintainCarNotifyProposeComponent', () => {
  let component: MaintainCarNotifyProposeComponent;
  let fixture: ComponentFixture<MaintainCarNotifyProposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarNotifyProposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarNotifyProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
