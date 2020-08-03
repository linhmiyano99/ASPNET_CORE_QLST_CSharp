import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCarsSearchComponent } from './schedule-cars-search.component';

describe('ScheduleCarsSearchComponent', () => {
    let component: ScheduleCarsSearchComponent;
    let fixture: ComponentFixture<ScheduleCarsSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleCarsSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleCarsSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
