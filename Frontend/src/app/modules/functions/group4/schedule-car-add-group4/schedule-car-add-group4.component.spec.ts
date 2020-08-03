import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarAddGroup4Component } from './schedule-car-add-group4.component';

describe('ScheduleCarAddGroup4Component', () => {
    let component: ScheduleCarAddGroup4Component;
    let fixture: ComponentFixture<ScheduleCarAddGroup4Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarAddGroup4Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarAddGroup4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
