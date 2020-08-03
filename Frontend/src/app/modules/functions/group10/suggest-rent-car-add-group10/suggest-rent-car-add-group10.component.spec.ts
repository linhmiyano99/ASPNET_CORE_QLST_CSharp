import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarAddGroup10Component } from './suggest-rent-car-add-group10.component';

describe('SuggestRentCarAddGroup10Component', () => {
  let component: SuggestRentCarAddGroup10Component;
  let fixture: ComponentFixture<SuggestRentCarAddGroup10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarAddGroup10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarAddGroup10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
