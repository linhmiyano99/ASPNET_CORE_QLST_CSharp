import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentEditGroup10Component } from './rent-edit-group10.component';

describe('RentEditGroup10Component', () => {
  let component: RentEditGroup10Component;
  let fixture: ComponentFixture<RentEditGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentEditGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentEditGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
