import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsNotifyEditComponent } from './maintain-cars-notify-edit.component';

describe('MaintainCarsNotifyEditComponent', () => {
    let component: MaintainCarsNotifyEditComponent;
    let fixture: ComponentFixture<MaintainCarsNotifyEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsNotifyEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsNotifyEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
