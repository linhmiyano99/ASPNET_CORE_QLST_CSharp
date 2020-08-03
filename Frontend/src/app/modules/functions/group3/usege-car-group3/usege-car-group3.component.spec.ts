import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsegeCarGroup3Component } from './usege-car-group3.component';

describe('UsegeCarGroup3Component', () => {
  let component: UsegeCarGroup3Component;
  let fixture: ComponentFixture<UsegeCarGroup3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsegeCarGroup3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsegeCarGroup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
