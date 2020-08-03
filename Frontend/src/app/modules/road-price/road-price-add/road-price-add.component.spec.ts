import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadPriceAddComponent } from './road-price-add.component';

describe('RoadPriceAddComponent', () => {
  let component: RoadPriceAddComponent;
  let fixture: ComponentFixture<RoadPriceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadPriceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadPriceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
