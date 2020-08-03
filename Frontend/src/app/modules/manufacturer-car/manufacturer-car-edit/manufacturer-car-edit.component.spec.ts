import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarEditComponent } from './manufacturer-car-edit.component';

describe('MaintenanceCarEditComponent', () => {
  let component: ManufacturerCarEditComponent;
  let fixture: ComponentFixture<ManufacturerCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
