import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsAddComponent } from './new-cars-add.component';

describe('NewCarsAddComponent', () => {
  let component: NewCarsAddComponent;
  let fixture: ComponentFixture<NewCarsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
