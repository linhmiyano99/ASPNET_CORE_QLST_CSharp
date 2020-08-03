import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarComponent } from './suggest-rent-car.component';

describe('SuggestRentCarComponent', () => {
  let component: SuggestRentCarComponent;
  let fixture: ComponentFixture<SuggestRentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
