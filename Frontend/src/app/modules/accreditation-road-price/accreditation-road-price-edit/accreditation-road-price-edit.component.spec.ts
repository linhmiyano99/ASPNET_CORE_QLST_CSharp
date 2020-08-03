import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRoadPriceEditComponent } from './accreditation-road-price-edit.component';

describe('AccreditationRoadPriceEditComponent', () => {
  let component: AccreditationRoadPriceEditComponent;
  let fixture: ComponentFixture<AccreditationRoadPriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccreditationRoadPriceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRoadPriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
