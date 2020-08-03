import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarEditComponent } from './model-car-edit.component';

describe('ModelCarEditComponent', () => {
  let component: ModelCarEditComponent;
  let fixture: ComponentFixture<ModelCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
