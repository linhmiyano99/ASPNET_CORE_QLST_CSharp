import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsEditComponent } from './new-cars-edit.component';

describe('NewCarsEditComponent', () => {
  let component: NewCarsEditComponent;
  let fixture: ComponentFixture<NewCarsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
