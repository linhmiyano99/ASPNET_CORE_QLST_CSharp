import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarAddComponent } from './manufacturer-car-add.component';

describe('MaintenanceCarAddComponent', () => {
  let component: ManufacturerCarAddComponent;
  let fixture: ComponentFixture<ManufacturerCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
