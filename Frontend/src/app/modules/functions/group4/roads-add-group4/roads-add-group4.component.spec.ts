import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsAddGroup4Component } from './roads-add-group4.component';

describe('RoadsAddGroup4Component', () => {
  let component: RoadsAddGroup4Component;
  let fixture: ComponentFixture<RoadsAddGroup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsAddGroup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsAddGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
