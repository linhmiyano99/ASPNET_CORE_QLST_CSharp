import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceEditGroup3Component } from './maintenance-price-edit-group3.component';

describe('MaintenancePriceEditGroup3Component', () => {
  let component: MaintenancePriceEditGroup3Component;
  let fixture: ComponentFixture<MaintenancePriceEditGroup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceEditGroup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceEditGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
