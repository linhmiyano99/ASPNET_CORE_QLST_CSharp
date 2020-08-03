import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCarPdGroup7Component } from './dx-car-pd-group7.component';

describe('DxCarPdGroup7Component', () => {
  let component: DxCarPdGroup7Component;
  let fixture: ComponentFixture<DxCarPdGroup7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxCarPdGroup7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxCarPdGroup7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
