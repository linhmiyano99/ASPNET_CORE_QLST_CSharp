import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentManagementGroup10Component } from './rent-management-group10.component';

describe('RentManagementGroup10Component', () => {
  let component: RentManagementGroup10Component;
  let fixture: ComponentFixture<RentManagementGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentManagementGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentManagementGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
