import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsViewGroup4Component } from './roads-view-group4.component';

describe('RoadsViewGroup4Component', () => {
  let component: RoadsViewGroup4Component;
  let fixture: ComponentFixture<RoadsViewGroup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsViewGroup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsViewGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
