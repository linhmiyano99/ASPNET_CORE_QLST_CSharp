import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceAddComponent } from './accreditation-road-price-add.component';

describe('AccreditationRoadPriceAddComponent', () => {
  let component: AccreditationRoadPriceAddComponent;
  let fixture: ComponentFixture<AccreditationRoadPriceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
