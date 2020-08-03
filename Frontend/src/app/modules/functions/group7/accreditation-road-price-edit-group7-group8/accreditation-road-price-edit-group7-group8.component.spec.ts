import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceEditGroup7Group8Component } from './accreditation-road-price-edit-group7-group8.component';

describe('AccreditationRoadPriceEditGroup7Group8Component', () => {
  let component: AccreditationRoadPriceEditGroup7Group8Component;
  let fixture: ComponentFixture<AccreditationRoadPriceEditGroup7Group8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceEditGroup7Group8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceEditGroup7Group8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
