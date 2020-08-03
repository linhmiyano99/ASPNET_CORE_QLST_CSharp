import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsAddGroup10Component } from './maintain-cars-add-group10.component';

describe('MaintainCarsAddGroup10Component', () => {
    let component: MaintainCarsAddGroup10Component;
    let fixture: ComponentFixture<MaintainCarsAddGroup10Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsAddGroup10Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsAddGroup10Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
