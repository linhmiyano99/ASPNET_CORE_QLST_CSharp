import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubGroup2Component } from './car-sub-group2.component';

describe('CarSubGroup2Component', () => {
  let component: CarSubGroup2Component;
  let fixture: ComponentFixture<CarSubGroup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSubGroup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSubGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
