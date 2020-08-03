import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsNotifyGroup10Component } from './maintain-cars-notify-group10.component';

describe('MaintainCarsNotifyGroup10Component', () => {
    let component: MaintainCarsNotifyGroup10Component;
    let fixture: ComponentFixture<MaintainCarsNotifyGroup10Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsNotifyGroup10Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsNotifyGroup10Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
