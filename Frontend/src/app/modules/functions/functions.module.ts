import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule, ConfirmDialogModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Group5Module } from './group5/group5.module';
import { Group1Module } from './group1/group1.module';
import { Group2Module } from './group2/group2.module';
import { Group3Module } from './group3/group3.module';
import { Group4Module } from './group4/group4.module';
import { Group6Module } from './group6/group6.module';
import { Group7Module } from './group7/group7.module';
import { Group8Module } from './group8/group8.module';
import { Group9Module } from './group9/group9.module';
import { Group10Module } from './group10/group10.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    Group5Module,
    Group1Module,
    Group2Module,
    Group3Module,
    Group4Module,
    Group6Module,
    Group7Module,
    Group8Module,
    Group9Module,
    Group10Module

  ],
  declarations: [
  ],
  exports: [
    Group5Module,
    Group1Module,
    Group2Module,
    Group3Module,
    Group4Module,
    Group6Module,
    Group7Module,
    Group8Module,
    Group9Module,
    Group10Module
  ],
  providers: [
    ConfirmDialogModule
  ]
})
export class FunctionsModule { }
