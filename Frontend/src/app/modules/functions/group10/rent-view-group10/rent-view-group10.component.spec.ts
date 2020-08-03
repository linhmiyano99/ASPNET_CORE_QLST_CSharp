import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentViewGroup10Component } from './rent-view-group10.component';

describe('RentViewGroup10Component', () => {
  let component: RentViewGroup10Component;
  let fixture: ComponentFixture<RentViewGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentViewGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentViewGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
