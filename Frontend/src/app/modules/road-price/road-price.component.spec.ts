import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceComponent } from './road-price.component';

describe('RoadPriceComponent', () => {
  let component: RoadPriceComponent;
  let fixture: ComponentFixture<RoadPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
