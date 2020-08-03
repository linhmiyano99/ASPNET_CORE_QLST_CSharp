import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarEditComponent } from './suggest-rent-car-edit.component';

describe('SuggestRentCarEditComponent', () => {
  let component: SuggestRentCarEditComponent;
  let fixture: ComponentFixture<SuggestRentCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
