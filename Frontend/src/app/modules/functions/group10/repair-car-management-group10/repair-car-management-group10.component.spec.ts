import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarManagementGroup10Component } from './repair-car-management-group10.component';

describe('RepairCarManagementGroup10Component', () => {
  let component: RepairCarManagementGroup10Component;
  let fixture: ComponentFixture<RepairCarManagementGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarManagementGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarManagementGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
