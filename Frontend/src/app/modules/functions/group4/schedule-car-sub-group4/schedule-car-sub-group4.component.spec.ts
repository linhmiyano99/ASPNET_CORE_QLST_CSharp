import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarSubGroup4Component } from './schedule-car-sub-group4.component';

describe('ScheduleCarSubGroup4Component', () => {
    let component: ScheduleCarSubGroup4Component;
    let fixture: ComponentFixture<ScheduleCarSubGroup4Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarSubGroup4Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarSubGroup4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
