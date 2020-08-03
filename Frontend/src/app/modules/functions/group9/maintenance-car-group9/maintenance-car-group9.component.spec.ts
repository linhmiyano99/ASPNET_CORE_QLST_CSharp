import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarGroup9Component } from './maintenance-car-group9.component';

describe('MaintenanceCarGroup9Component', () => {
  let component: MaintenanceCarGroup9Component;
  let fixture: ComponentFixture<MaintenanceCarGroup9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarGroup9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarGroup9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
