import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceAddComponent } from './maintenance-price-add.component';

describe('MaintenancePriceAddComponent', () => {
  let component: MaintenancePriceAddComponent;
  let fixture: ComponentFixture<MaintenancePriceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
