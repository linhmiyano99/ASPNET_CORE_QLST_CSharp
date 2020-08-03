import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarEditGroup10Component } from './suggest-rent-car-edit-group10.component';

describe('SuggestRentCarEditGroup10Component', () => {
  let component: SuggestRentCarEditGroup10Component;
  let fixture: ComponentFixture<SuggestRentCarEditGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarEditGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarEditGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
