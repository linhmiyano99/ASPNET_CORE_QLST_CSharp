import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarViewGroup10Component } from './repair-car-view-group10.component';

describe('RepairCarViewGroup10Component', () => {
  let component: RepairCarViewGroup10Component;
  let fixture: ComponentFixture<RepairCarViewGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarViewGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarViewGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
