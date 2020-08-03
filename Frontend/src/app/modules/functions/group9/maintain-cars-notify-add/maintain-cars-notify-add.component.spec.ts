import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsNotifyAddComponent } from './maintain-cars-notify-add.component';

describe('MaintainCarsNotifyAddComponent', () => {
    let component: MaintainCarsNotifyAddComponent;
    let fixture: ComponentFixture<MaintainCarsNotifyAddComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsNotifyAddComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsNotifyAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
