import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsEditGroup4Component } from './roads-edit-group4.component';

describe('RoadsEditGroup4Component', () => {
  let component: RoadsEditGroup4Component;
  let fixture: ComponentFixture<RoadsEditGroup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsEditGroup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsEditGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
