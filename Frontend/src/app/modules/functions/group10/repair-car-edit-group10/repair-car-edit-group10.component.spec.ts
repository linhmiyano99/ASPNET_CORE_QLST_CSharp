import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarEditGroup10Component } from './repair-car-edit-group10.component';

describe('RepairCarEditGroup10Component', () => {
  let component: RepairCarEditGroup10Component;
  let fixture: ComponentFixture<RepairCarEditGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarEditGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarEditGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
