import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarsAddComponent } from './schedule-cars-add.component';

describe('ScheduleCarsAddComponent', () => {
    let component: ScheduleCarsAddComponent;
    let fixture: ComponentFixture<ScheduleCarsAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarsAddComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarsAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
