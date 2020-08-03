import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarComponent } from './maintenance-car.component';

describe('MaintenanceCarComponent', () => {
  let component: MaintenanceCarComponent;
  let fixture: ComponentFixture<MaintenanceCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
