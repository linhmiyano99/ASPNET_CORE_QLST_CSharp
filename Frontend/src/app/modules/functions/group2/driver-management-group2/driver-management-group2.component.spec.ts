import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverManagementGroup2Component } from './driver-management-group2.component';

describe('DriverManagementGroup2Component', () => {
    let component: DriverManagementGroup2Component;
    let fixture: ComponentFixture<DriverManagementGroup2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverManagementGroup2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverManagementGroup2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
