import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarEditGroup4Component } from './schedule-car-edit-group4.component';

describe('ScheduleCarEditGroup4Component', () => {
    let component: ScheduleCarEditGroup4Component;
    let fixture: ComponentFixture<ScheduleCarEditGroup4Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarEditGroup4Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarEditGroup4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
