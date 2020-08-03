import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAddGroup2Component } from './driver-add-group2.component';

describe('DriverAddGroup2Component', () => {
    let component: DriverAddGroup2Component;
    let fixture: ComponentFixture<DriverAddGroup2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverAddGroup2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverAddGroup2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
