import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSubComponent } from './car-sub.component';

describe('CarSubComponent', () => {
  let component: CarSubComponent;
  let fixture: ComponentFixture<CarSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
