import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadEditComponent } from './road-edit.component';

describe('RoadEditComponent', () => {
  let component: RoadEditComponent;
  let fixture: ComponentFixture<RoadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
