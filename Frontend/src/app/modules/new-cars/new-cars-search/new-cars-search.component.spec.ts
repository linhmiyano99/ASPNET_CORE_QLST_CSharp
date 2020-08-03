import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsSearchComponent } from './new-cars-search.component';

describe('NewCarsSearchComponent', () => {
  let component: NewCarsSearchComponent;
  let fixture: ComponentFixture<NewCarsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
