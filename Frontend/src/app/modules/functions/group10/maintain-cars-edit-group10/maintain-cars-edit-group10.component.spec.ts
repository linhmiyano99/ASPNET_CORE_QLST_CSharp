import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsEditGroup10Component } from './maintain-cars-edit-group10.component';

describe('MaintainCarsEditGroup10Component', () => {
    let component: MaintainCarsEditGroup10Component;
    let fixture: ComponentFixture<MaintainCarsEditGroup10Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsEditGroup10Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsEditGroup10Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
