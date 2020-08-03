import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarViewGroup10Component } from './suggest-rent-car-view-group10.component';

describe('SuggestRentCarViewGroup10Component', () => {
  let component: SuggestRentCarViewGroup10Component;
  let fixture: ComponentFixture<SuggestRentCarViewGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarViewGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarViewGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
