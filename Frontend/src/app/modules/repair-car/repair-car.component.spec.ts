import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarComponent } from './repair-car.component';

describe('RepairCarComponent', () => {
  let component: RepairCarComponent;
  let fixture: ComponentFixture<RepairCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
