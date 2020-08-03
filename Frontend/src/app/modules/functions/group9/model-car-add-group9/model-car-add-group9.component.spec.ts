import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarAddGroup9Component } from './model-car-add-group9.component';

describe('ModelCarAddGroup9Component', () => {
  let component: ModelCarAddGroup9Component;
  let fixture: ComponentFixture<ModelCarAddGroup9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarAddGroup9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarAddGroup9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
