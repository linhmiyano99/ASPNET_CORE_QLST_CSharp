import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverSubComponent } from './driver-sub.component';

describe('DriverSubComponent', () => {
  let component: DriverSubComponent;
  let fixture: ComponentFixture<DriverSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
