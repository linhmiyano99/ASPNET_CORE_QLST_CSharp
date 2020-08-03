import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceEditComponent } from './road-price-edit.component';

describe('RoadPriceEditComponent', () => {
  let component: RoadPriceEditComponent;
  let fixture: ComponentFixture<RoadPriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
