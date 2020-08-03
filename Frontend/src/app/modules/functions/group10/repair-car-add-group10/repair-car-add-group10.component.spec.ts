import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarAddGroup10Component } from './repair-car-add-group10.component';

describe('RepairCarAddGroup10Component', () => {
  let component: RepairCarAddGroup10Component;
  let fixture: ComponentFixture<RepairCarAddGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarAddGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarAddGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
