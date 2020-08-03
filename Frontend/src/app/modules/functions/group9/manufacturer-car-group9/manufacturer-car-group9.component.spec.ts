import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarComponentGroup9 } from './manufacturer-car-group9.component';

describe('ManufacturerCarComponentGroup9', () => {
    let component: ManufacturerCarComponentGroup9;
    let fixture: ComponentFixture<ManufacturerCarComponentGroup9>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManufacturerCarComponentGroup9]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManufacturerCarComponentGroup9);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
