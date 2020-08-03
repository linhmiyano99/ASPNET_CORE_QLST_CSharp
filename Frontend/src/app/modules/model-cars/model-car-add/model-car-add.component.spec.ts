import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCarAddComponent } from './model-car-add.component';

describe('ModelCarAddComponent', () => {
  let component: ModelCarAddComponent;
  let fixture: ComponentFixture<ModelCarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
