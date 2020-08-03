import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCarAddComponent } from './maintenance-car-add.component';

describe('MaintenanceCarAddComponent', () => {
  let component: MaintenanceCarAddComponent;
  let fixture: ComponentFixture<MaintenanceCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
