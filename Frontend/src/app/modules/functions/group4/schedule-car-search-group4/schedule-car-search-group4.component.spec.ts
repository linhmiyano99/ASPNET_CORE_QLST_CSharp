import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarSearchGroup4Component } from './schedule-car-search-group4.component';

describe('ScheduleCarSearchGroup4Component', () => {
    let component: ScheduleCarSearchGroup4Component;
    let fixture: ComponentFixture<ScheduleCarSearchGroup4Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarSearchGroup4Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarSearchGroup4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
