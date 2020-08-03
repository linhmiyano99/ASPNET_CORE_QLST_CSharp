import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarAddComponent } from './repair-car-add.component';

describe('RepairCarAddComponent', () => {
  let component: RepairCarAddComponent;
  let fixture: ComponentFixture<RepairCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
