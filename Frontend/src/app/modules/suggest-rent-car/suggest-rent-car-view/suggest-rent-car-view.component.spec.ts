import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarViewComponent } from './suggest-rent-car-view.component';

describe('SuggestRentCarViewComponent', () => {
  let component: SuggestRentCarViewComponent;
  let fixture: ComponentFixture<SuggestRentCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
