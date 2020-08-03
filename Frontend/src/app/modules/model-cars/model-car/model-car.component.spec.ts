import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarComponent } from './model-car.component';

describe('ModelCarComponent', () => {
  let component: ModelCarComponent;
  let fixture: ComponentFixture<ModelCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
