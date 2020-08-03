import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsNotifyComponent } from './maintain-cars-notify.component';

describe('MaintainCarsNotifyComponent', () => {
    let component: MaintainCarsNotifyComponent;
    let fixture: ComponentFixture<MaintainCarsNotifyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsNotifyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsNotifyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
