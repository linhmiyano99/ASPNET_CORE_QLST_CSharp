import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceGroup7Group8Component } from './accreditation-road-price-group7-group8.component';

describe('AccreditationRoadPriceGroup7Group8Component', () => {
  let component: AccreditationRoadPriceGroup7Group8Component;
  let fixture: ComponentFixture<AccreditationRoadPriceGroup7Group8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceGroup7Group8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceGroup7Group8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
