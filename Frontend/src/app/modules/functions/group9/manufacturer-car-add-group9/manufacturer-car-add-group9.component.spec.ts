import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerCarAddComponentGroup9 } from './manufacturer-car-add-group9.component';

describe('ManufacturerCarAddComponent', () => {
    let component: ManufacturerCarAddComponentGroup9;
    let fixture: ComponentFixture<ManufacturerCarAddComponentGroup9>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManufacturerCarAddComponentGroup9]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManufacturerCarAddComponentGroup9);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
