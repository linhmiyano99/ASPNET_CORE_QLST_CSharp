import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCarEditGroup8Component } from './dx-car-edit-group8.component';

describe('DxCarEditGroup8Component', () => {
  let component: DxCarEditGroup8Component;
  let fixture: ComponentFixture<DxCarEditGroup8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxCarEditGroup8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxCarEditGroup8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
