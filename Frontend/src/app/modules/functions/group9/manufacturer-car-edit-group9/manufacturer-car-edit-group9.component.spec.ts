import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarEditComponentGroup9 } from './manufacturer-car-edit-group9.component';

describe('ManufacturerCarEditComponent', () => {
    let component: ManufacturerCarEditComponentGroup9;
    let fixture: ComponentFixture<ManufacturerCarEditComponentGroup9>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManufacturerCarEditComponentGroup9]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManufacturerCarEditComponentGroup9);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
