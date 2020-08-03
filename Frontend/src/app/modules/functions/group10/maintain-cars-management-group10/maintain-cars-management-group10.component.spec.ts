import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsManagementGroup10Component } from './maintain-cars-management-group10.component';

describe('MaintainCarsManagementGroup10Component', () => {
    let component: MaintainCarsManagementGroup10Component;
    let fixture: ComponentFixture<MaintainCarsManagementGroup10Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsManagementGroup10Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsManagementGroup10Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
