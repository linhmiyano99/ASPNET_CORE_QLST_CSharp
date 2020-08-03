import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { InsuranceAddComponent } from './insurance-add/insurance-add.component';
import { InsuranceEditComponent } from './insurance-edit/insurance-edit.component';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
  imports: [
    CommonModule,
    FunctionsModule
  ],
  declarations: [InsuranceComponent, InsuranceAddComponent, InsuranceEditComponent]
})
export class InsuranceModule { }
