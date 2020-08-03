import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsAddComponent } from './maintain-cars-add.component';

describe('MaintainCarsAddComponent', () => {
  let component: MaintainCarsAddComponent;
  let fixture: ComponentFixture<MaintainCarsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCarsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCarsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
