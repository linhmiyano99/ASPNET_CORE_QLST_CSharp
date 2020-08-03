import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditGroup6Component } from './car-edit-group6.component';

describe('CarEditGroup6Component', () => {
  let component: CarEditGroup6Component;
  let fixture: ComponentFixture<CarEditGroup6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarEditGroup6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditGroup6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
