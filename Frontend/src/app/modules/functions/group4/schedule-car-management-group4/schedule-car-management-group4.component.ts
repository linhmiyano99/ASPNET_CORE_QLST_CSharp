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
    selector: 'app-schedule-car-management-group4',
    templateUrl: './schedule-car-management-group4.component.html',
    styleUrls: ['./schedule-car-management-group4.component.less', '../../style.less']
})
export class ScheduleCarManagementGroup4Component extends AppComponentBase implements OnInit, AfterViewInit {
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
    locale_vi: any;
    ngOnInit() {
        this.locale_vi = {
            firstDayOfWeek: 0,
            dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            monthNames: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            monthNamesShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
            today: 'Hôm nay',
            clear: 'Xóa'
        };
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
    timeValue: Date;

    onSelect($event) {
        console.log($event);
    }
    delete() {
    }

    search() {
    }

}
