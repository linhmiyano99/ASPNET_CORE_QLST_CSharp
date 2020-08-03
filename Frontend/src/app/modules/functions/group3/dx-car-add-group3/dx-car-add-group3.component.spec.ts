import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCarAddGroup3Component } from './dx-car-add-group3.component';

describe('DxCarAddGroup3Component', () => {
  let component: DxCarAddGroup3Component;
  let fixture: ComponentFixture<DxCarAddGroup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxCarAddGroup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxCarAddGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
