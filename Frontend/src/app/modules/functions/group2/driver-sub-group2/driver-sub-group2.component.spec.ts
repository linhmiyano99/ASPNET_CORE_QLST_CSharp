import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSubGroup2Component } from './driver-sub-group2.component';

describe('DriverSubGroup2Component', () => {
    let component: DriverSubGroup2Component;
    let fixture: ComponentFixture<DriverSubGroup2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverSubGroup2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverSubGroup2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
