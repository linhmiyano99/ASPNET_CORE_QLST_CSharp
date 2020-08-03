import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarEditGroup1Component } from './model-car-edit-group1.component';

describe('ModelCarEditGroup1Component', () => {
  let component: ModelCarEditGroup1Component;
  let fixture: ComponentFixture<ModelCarEditGroup1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarEditGroup1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarEditGroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
