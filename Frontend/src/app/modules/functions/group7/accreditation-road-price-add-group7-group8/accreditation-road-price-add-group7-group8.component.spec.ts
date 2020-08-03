import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceAddGroup7Group8Component } from './accreditation-road-price-add-group7-group8.component';

describe('AccreditationRoadPriceAddGroup7Group8Component', () => {
  let component: AccreditationRoadPriceAddGroup7Group8Component;
  let fixture: ComponentFixture<AccreditationRoadPriceAddGroup7Group8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceAddGroup7Group8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceAddGroup7Group8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
