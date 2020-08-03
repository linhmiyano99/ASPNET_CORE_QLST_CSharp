import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadAddComponent } from './road-add.component';

describe('RoadAddComponent', () => {
  let component: RoadAddComponent;
  let fixture: ComponentFixture<RoadAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
