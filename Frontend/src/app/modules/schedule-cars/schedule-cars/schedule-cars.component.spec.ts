import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarsComponent } from './schedule-cars.component';

describe('ScheduleCarsComponent', () => {
    let component: ScheduleCarsComponent;
    let fixture: ComponentFixture<ScheduleCarsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
