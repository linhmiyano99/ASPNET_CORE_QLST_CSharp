import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarManagementGroup4Component } from './model-car-management-group4.component';

describe('ModelCarManagementGroup4Component', () => {
  let component: ModelCarManagementGroup4Component;
  let fixture: ComponentFixture<ModelCarManagementGroup4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarManagementGroup4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarManagementGroup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
