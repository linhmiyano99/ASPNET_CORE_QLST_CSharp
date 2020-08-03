import { DriverEditGroup2Component } from './driver-edit-group2.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DriverEditGroup2Component', () => {
    let component: DriverEditGroup2Component;
    let fixture: ComponentFixture<DriverEditGroup2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DriverEditGroup2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DriverEditGroup2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
