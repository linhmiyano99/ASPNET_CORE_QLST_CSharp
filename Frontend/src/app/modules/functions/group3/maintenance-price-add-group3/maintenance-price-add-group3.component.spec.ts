import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceAddGroup3Component } from './maintenance-price-add-group3.component';

describe('MaintenancePriceAddGroup3Component', () => {
  let component: MaintenancePriceAddGroup3Component;
  let fixture: ComponentFixture<MaintenancePriceAddGroup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceAddGroup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceAddGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
