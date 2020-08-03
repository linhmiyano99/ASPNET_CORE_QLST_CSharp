import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddGroup10Component } from './car-add-group10.component';

describe('CarAddGroup10Component', () => {
  let component: CarAddGroup10Component;
  let fixture: ComponentFixture<CarAddGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarAddGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
