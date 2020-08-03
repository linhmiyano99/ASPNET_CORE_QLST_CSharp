import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSearchGroup2Component } from './driver-search-group2.component';

describe('DriverSearchGroup2Component', () => {
    let component: DriverSearchGroup2Component;
    let fixture: ComponentFixture<DriverSearchGroup2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverSearchGroup2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverSearchGroup2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
