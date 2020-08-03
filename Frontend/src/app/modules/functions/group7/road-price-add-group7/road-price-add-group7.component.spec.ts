import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceAddGroup7Component } from './road-price-add-group7.component';

describe('RoadPriceAddGroup7Component', () => {
  let component: RoadPriceAddGroup7Component;
  let fixture: ComponentFixture<RoadPriceAddGroup7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceAddGroup7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceAddGroup7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
