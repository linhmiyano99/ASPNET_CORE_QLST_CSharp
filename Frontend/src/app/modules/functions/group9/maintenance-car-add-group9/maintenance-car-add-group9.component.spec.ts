import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarAddGroup9Component } from './maintenance-car-add-group9.component';

describe('MaintenanceCarAddGroup9Component', () => {
  let component: MaintenanceCarAddGroup9Component;
  let fixture: ComponentFixture<MaintenanceCarAddGroup9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarAddGroup9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarAddGroup9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
