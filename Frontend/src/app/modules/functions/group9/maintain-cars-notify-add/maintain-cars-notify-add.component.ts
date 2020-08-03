import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group9BaoTriServiceProxy, Group9BaoTriDto, Group4XeServiceProxy, Group4XeDto, Group9XeDto } from '@shared/service-proxies/service-proxies';
import { environment } from 'environments/environment';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";
import * as moment from 'moment';
import { Console } from 'console';


@Component({
    selector: 'app-maintain-cars-notify-add',
    templateUrl: './maintain-cars-notify-add.component.html',
    styleUrls: ['./maintain-cars-notify-add.component.css', '../../style.less']
})
export class MaintainCarsNotifyAddComponent extends AppComponentBase implements OnInit, AfterViewInit {

    constructor(injector: Injector, private group9BaoTriService: Group9BaoTriServiceProxy,
        private group4XeService: Group4XeServiceProxy,) {
        super(injector);
        this.group9BaoTriService.getCurrentUserName().subscribe(response => {
            this.currentUserName = response;
        })
        this.group9BaoTriService.bAOTRI_Group9SearchXeStateNoMaintain().subscribe(response => {
            this.xe_list = response;
        })
        console.log(this);

    }

    currentUserName: string
    maxe: number;
    mataixe: number;
    ghichu: string;
    nguoigui: string;

    luudialog: boolean;

    filterInput: Group9BaoTriDto = new Group9BaoTriDto();
    group9Xe: Group9XeDto = new Group9XeDto();
    group9BaoTriInput: Group9BaoTriDto = new Group9BaoTriDto();
    currentId: number;
    saving = false;
    carManufacturerOpt: object = {};
    xe_list: Group9XeDto[];

    selectedLevel: number;
    maBaoTri: string;


    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }


    SearchCarNoMaintainState() {
        this.group9BaoTriService.bAOTRI_Group9SearchXeStateNoMaintain().subscribe(response => {
            this.xe_list = response;
        })
        console.log(this);
    }
    getValue() {
        this.group9BaoTriInput.baoTri_MaBaoTri = this.maBaoTri;
        this.group9BaoTriInput.baoTri_MaXe = this.selectedLevel;
        this.group9BaoTriInput.baoTri_TinhTrangBaoTri = "C";
        this.group9BaoTriInput.baoTri_NoiBaoTri = null;
        this.group9BaoTriInput.baoTri_NgayDuyet = null;
        this.group9BaoTriInput.baoTri_NgayXuatXuong = null;
        this.group9BaoTriInput.baoTri_TrangThai = "U";
        this.group9BaoTriInput.baoTri_ThanhTien = null;
        this.group9BaoTriInput.baoTri_MaTaiXe = null;
        this.group9BaoTriInput.baoTri_MaNguoiGui = this.currentUserName;
        this.group9BaoTriInput.baoTri_NguoiTao = this.currentUserName;
        this.group9BaoTriInput.baoTri_NgayTao = null;
        this.group9BaoTriInput.baoTri_GhiChu = this.ghichu;

        // console.log(`[getValue] loainhienlieu: ${this.loainhienlieu}`);
    }

    commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    }

    formatCurrency(getValue) {

        $('#Gia').val(this.commaSeparateNumber($('#Gia').val().toString().split(',').join("")));

    }

    add() {
        this.getValue();


        this.group9BaoTriService.bAOTRI_Group9Insert(this.group9BaoTriInput).subscribe((response) => {
            if (response["Result"] == "1") {
                this.notify.error("Thêm đề xuất thất bại", "ERROR", environment.opt);
                this.huyconfirm();
            } else {
                this.notify.info("Thêm   đề xuất thành công", "SUCCESS", environment.opt);
                //window.location.reload();
                this.SearchCarNoMaintainState();
            }
        });

    }

    insert(): void {
        this.checkvalue();
        this.getValue();
        this.primengTableHelper.showLoadingIndicator();


        this.group9BaoTriService.bAOTRI_Group9SearchXeStateNoMaintain().subscribe(response => {
            this.xe_list = response;
            this.group9BaoTriService.bAOTRI_Group9Insert(this.group9BaoTriInput).subscribe((response) => {
                if (response["Result"] == "1") {
                    this.notify.error(response["ErrorDesc"], "ERROR", environment.opt);
                } else {
                    this.notify.success("Thêm xe thành công", "SUCCESS", environment.opt);

                }
            });
            this.selectedLevel = null;

            this.primengTableHelper.hideLoadingIndicator();

        });


    }

    checkvalue(): boolean {
        if (this.selectedLevel == 0) {
            this.notify.error("Bạn chưa chọn mã xe", "ERROR", environment.opt);
            return false;
        }
        else if (this.ghichu == null || this.ghichu == '') {
            this.notify.error("Bạn chưa nhập ghi chú", "ERROR", environment.opt);
            return false;
        }
        return true;
    }

    luuconfirm() {
        if (this.checkvalue() == true) {
            this.luudialog = true;
        }
    }

    huyconfirm() {
        this.maxe = null;
        this.ghichu = null;
    }

    ngOnInit() {
    }
}
