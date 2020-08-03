import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarsEditComponent } from './schedule-cars-edit.component';

describe('ScheduleCarsEditComponent', () => {
    let component: ScheduleCarsEditComponent;
    let fixture: ComponentFixture<ScheduleCarsEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarsEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarsEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
