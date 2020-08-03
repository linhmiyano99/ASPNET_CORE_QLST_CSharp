import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestRentCarAddComponent } from './suggest-rent-car-add.component';

describe('SuggestRentCarAddComponent', () => {
  let component: SuggestRentCarAddComponent;
  let fixture: ComponentFixture<SuggestRentCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestRentCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestRentCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
