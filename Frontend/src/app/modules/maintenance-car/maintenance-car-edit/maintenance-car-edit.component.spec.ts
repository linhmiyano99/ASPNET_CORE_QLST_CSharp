import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarEditComponent } from './maintenance-car-edit.component';

describe('MaintenanceCarEditComponent', () => {
  let component: MaintenanceCarEditComponent;
  let fixture: ComponentFixture<MaintenanceCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
