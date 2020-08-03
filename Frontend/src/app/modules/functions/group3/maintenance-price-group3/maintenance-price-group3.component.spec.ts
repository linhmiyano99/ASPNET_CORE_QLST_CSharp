import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceGroup3Component } from './maintenance-price-group3.component';

describe('MaintenancePriceGroup3Component', () => {
  let component: MaintenancePriceGroup3Component;
  let fixture: ComponentFixture<MaintenancePriceGroup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceGroup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
