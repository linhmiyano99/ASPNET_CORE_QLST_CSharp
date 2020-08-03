import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarEditGroup9Component } from './maintenance-car-edit-group9.component';

describe('MaintenanceCarEditGroup9Component', () => {
  let component: MaintenanceCarEditGroup9Component;
  let fixture: ComponentFixture<MaintenanceCarEditGroup9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarEditGroup9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarEditGroup9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
