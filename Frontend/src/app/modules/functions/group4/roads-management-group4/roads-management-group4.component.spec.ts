import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsManagementGroup4Component } from './roads-management-group4.component';

describe('RoadsManagementGroup4Component', () => {
  let component: RoadsManagementGroup4Component;
  let fixture: ComponentFixture<RoadsManagementGroup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsManagementGroup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsManagementGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
