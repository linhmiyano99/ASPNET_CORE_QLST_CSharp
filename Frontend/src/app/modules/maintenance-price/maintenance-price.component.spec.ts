import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePriceComponent } from './maintenance-price.component';

describe('MaintenancePriceComponent', () => {
  let component: MaintenancePriceComponent;
  let fixture: ComponentFixture<MaintenancePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
