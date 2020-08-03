import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarNotifyAddComponent } from './maintain-car-notify-add.component';

describe('MaintainCarNotifyAddComponent', () => {
  let component: MaintainCarNotifyAddComponent;
  let fixture: ComponentFixture<MaintainCarNotifyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarNotifyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarNotifyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
