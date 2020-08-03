import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceEditComponent } from './maintenance-price-edit.component';

describe('MaintenancePriceEditComponent', () => {
  let component: MaintenancePriceEditComponent;
  let fixture: ComponentFixture<MaintenancePriceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
