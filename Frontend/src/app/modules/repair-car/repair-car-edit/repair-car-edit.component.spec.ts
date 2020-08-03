import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarEditComponent } from './repair-car-edit.component';

describe('RepairCarEditComponent', () => {
  let component: RepairCarEditComponent;
  let fixture: ComponentFixture<RepairCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
