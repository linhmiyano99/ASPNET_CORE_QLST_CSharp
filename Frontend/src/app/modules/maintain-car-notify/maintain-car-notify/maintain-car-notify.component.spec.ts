import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarNotifyComponent } from './maintain-car-notify.component';

describe('MaintainCarNotifyComponent', () => {
  let component: MaintainCarNotifyComponent;
  let fixture: ComponentFixture<MaintainCarNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
