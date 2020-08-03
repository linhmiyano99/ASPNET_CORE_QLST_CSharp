import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceGroup7Component } from './road-price-group7.component';

describe('RoadPriceGroup7Component', () => {
  let component: RoadPriceGroup7Component;
  let fixture: ComponentFixture<RoadPriceGroup7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceGroup7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceGroup7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
