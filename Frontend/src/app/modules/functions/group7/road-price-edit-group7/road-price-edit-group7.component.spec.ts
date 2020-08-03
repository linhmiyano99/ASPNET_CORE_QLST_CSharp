import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceEditGroup7Component } from './road-price-edit-group7.component';

describe('RoadPriceEditGroup7Component', () => {
  let component: RoadPriceEditGroup7Component;
  let fixture: ComponentFixture<RoadPriceEditGroup7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceEditGroup7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceEditGroup7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
