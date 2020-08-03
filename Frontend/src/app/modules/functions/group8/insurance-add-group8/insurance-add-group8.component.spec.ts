import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAddGroup8Component } from './insurance-add-group8.component';

describe('InsuranceAddGroup8Component', () => {
  let component: InsuranceAddGroup8Component;
  let fixture: ComponentFixture<InsuranceAddGroup8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAddGroup8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAddGroup8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
