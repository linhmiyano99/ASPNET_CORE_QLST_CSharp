import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarManagementGroup10Component } from './suggest-rent-car-management-group10.component';

describe('SuggestRentCarManagementGroup10Component', () => {
  let component: SuggestRentCarManagementGroup10Component;
  let fixture: ComponentFixture<SuggestRentCarManagementGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarManagementGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarManagementGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
