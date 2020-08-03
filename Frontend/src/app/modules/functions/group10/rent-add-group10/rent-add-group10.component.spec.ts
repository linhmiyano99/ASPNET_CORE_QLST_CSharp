import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAddGroup10Component } from './rent-add-group10.component';

describe('RentAddGroup10Component', () => {
  let component: RentAddGroup10Component;
  let fixture: ComponentFixture<RentAddGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAddGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAddGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
