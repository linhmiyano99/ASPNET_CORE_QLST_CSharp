import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsRequestComponent } from './maintain-cars-request.component';

describe('MaintainCarsRequestComponent', () => {
    let component: MaintainCarsRequestComponent;
    let fixture: ComponentFixture<MaintainCarsRequestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsRequestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
