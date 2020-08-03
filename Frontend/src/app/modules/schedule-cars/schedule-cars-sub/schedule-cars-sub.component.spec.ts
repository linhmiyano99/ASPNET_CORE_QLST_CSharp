import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarsSubComponent } from './schedule-cars-sub.component';

describe('ScheduleCarsSubComponent', () => {
    let component: ScheduleCarsSubComponent;
    let fixture: ComponentFixture<ScheduleCarsSubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarsSubComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarsSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
