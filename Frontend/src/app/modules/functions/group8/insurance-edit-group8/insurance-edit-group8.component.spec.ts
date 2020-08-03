import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceEditGroup8Component } from './insurance-edit-group8.component';

describe('InsuranceEditGroup8Component', () => {
  let component: InsuranceEditGroup8Component;
  let fixture: ComponentFixture<InsuranceEditGroup8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceEditGroup8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceEditGroup8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
