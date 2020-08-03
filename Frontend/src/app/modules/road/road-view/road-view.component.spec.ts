import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadViewComponent } from './road-view.component';

describe('RoadViewComponent', () => {
  let component: RoadViewComponent;
  let fixture: ComponentFixture<RoadViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
