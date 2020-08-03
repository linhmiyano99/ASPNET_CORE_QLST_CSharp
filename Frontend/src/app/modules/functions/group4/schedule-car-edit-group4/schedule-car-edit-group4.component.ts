import { environment } from './../../../../../environments/environment.prod';
import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    Injector
} from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/table";
import { Paginator } from "primeng/paginator";
import {
    Group4LoaiXeServiceProxy,
} from "@shared/service-proxies/service-proxies";
@Component({
    selector: 'app-schedule-car-edit-group4',
    templateUrl: './schedule-car-edit-group4.component.html',
    styleUrls: ['./schedule-car-edit-group4.component.less', '../../style.less']
})
export class ScheduleCarEditGroup4Component extends AppComponentBase implements OnInit {
 /**
     *
     */
    @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;
    constructor(injector: Injector, private Group4LoaiXeServiceProxy: Group4LoaiXeServiceProxy) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;
    }

    currentUserName: string;
    ngOnInit() {
    }
    ngAfterViewInit(): void {
        this.search();
    }

    // Some stuff
    curScheduleId: number;
    // carTypeInput: Group4LoaiXeDto = new Group4LoaiXeDto();
    // carTypeRecords: Group4LoaiXeDto[] = [];

    onKeyUp(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    delete() {
    }

    search() {
    }

}
