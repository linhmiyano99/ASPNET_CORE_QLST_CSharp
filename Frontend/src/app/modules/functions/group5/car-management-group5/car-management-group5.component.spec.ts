import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementGroup5Component } from './car-management-group5.component';

describe('CarManagementGroup5Component', () => {
  let component: CarManagementGroup5Component;
  let fixture: ComponentFixture<CarManagementGroup5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarManagementGroup5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarManagementGroup5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
