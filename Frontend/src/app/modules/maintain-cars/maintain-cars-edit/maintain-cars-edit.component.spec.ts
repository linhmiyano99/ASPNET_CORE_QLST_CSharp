import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCarsEditComponent } from './maintain-cars-edit.component';

describe('MaintainCarsEditComponent', () => {
    let component: MaintainCarsEditComponent;
    let fixture: ComponentFixture<MaintainCarsEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MaintainCarsEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MaintainCarsEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
