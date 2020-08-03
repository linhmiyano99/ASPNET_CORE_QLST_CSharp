import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSearchComponent } from './driver-search.component';

describe('DriverSearchComponent', () => {
    let component: DriverSearchComponent;
    let fixture: ComponentFixture<DriverSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
