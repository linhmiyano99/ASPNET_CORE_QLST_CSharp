import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGroup5Group6Component } from './dashboard-group5-group6.component';

describe('DashboardGroup5Group6Component', () => {
  let component: DashboardGroup5Group6Component;
  let fixture: ComponentFixture<DashboardGroup5Group6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGroup5Group6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGroup5Group6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
