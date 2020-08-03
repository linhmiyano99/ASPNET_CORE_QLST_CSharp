import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceComponent } from './accreditation-road-price.component';

describe('AccreditationRoadPriceComponent', () => {
  let component: AccreditationRoadPriceComponent;
  let fixture: ComponentFixture<AccreditationRoadPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
