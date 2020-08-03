import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceManagementGroup8Component } from './insurance-management-group8.component';

describe('InsuranceManagementGroup8Component', () => {
  let component: InsuranceManagementGroup8Component;
  let fixture: ComponentFixture<InsuranceManagementGroup8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceManagementGroup8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceManagementGroup8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
