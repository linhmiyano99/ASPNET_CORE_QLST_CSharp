import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairCarViewComponent } from './repair-car-view.component';

describe('RepairCarViewComponent', () => {
  let component: RepairCarViewComponent;
  let fixture: ComponentFixture<RepairCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
