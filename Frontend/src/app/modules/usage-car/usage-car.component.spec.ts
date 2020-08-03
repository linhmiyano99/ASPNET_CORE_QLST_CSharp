import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageCarComponent } from './usage-car.component';

describe('UsageCarComponent', () => {
  let component: UsageCarComponent;
  let fixture: ComponentFixture<UsageCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
