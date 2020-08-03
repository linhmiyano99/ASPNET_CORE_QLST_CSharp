import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCarManagementGroup5Component } from './dx-car-management-group5.component';

describe('DxCarManagementGroup5Component', () => {
  let component: DxCarManagementGroup5Component;
  let fixture: ComponentFixture<DxCarManagementGroup5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxCarManagementGroup5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxCarManagementGroup5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
