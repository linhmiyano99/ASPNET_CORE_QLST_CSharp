import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarManagementGroup4Component } from './schedule-car-management-group4.component';

describe('ScheduleCarManagementGroup4Component', () => {
    let component: ScheduleCarManagementGroup4Component;
    let fixture: ComponentFixture<ScheduleCarManagementGroup4Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarManagementGroup4Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarManagementGroup4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
