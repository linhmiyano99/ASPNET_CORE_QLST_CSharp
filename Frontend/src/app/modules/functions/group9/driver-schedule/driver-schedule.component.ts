

import { environment } from './../../../../../environments/environment.prod';
import { Component, ViewChild, OnInit, AfterViewInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/components/table/table";
import { Paginator } from "primeng/primeng";
import {
    Group9HoatDongTaiXeServiceProxy,
    Group9HoatDongTaiXeDto,
    Group4LichTrinhServiceProxy,
    Group4LichTrinhDto,
    Group4TuyenChayServiceProxy, Group4TuyenChayDto,

    Group4LoaiXeServiceProxy, Group4LoaiXeDto, Group9LichTrinhDto, Group9TaiXeDto,

} from "@shared/service-proxies/service-proxies";
import { result } from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'app-driver-schedule-group9',
    templateUrl: './driver-schedule.component.html',
    styleUrls: ['./driver-schedule.component.less', '../../style.less']
})
export class DriverScheduleComponent extends AppComponentBase implements OnInit, AfterViewInit {

    empty_value: any[];

    @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;

    constructor(injector: Injector, private group9HoatDongService: Group9HoatDongTaiXeServiceProxy,
        private group4LichTrinhProxy: Group4LichTrinhServiceProxy,
        private group4_TuyenChayProxy: Group4TuyenChayServiceProxy,
        private group4LOAIXE: Group4LoaiXeServiceProxy,

    ) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;

        this.group9HoatDongService.hOATDONGTAIXE_Group9SearchAllLichTrinh().subscribe(response=>{
            this.lichtrinh_list = response;
        })
        this.group9HoatDongService.hOATDONGTAIXE_Group9SearchAllTaiXe().subscribe(response=>
        { 
               this.taixe_list = response;
        })

    }

    currentUserName: string;
    currentId: number;

    // Constants
    lichtrinh_list: Group9LichTrinhDto[] ;
    taixe_list: Group9TaiXeDto[] ;
    listHoatDongTaiXe: Group9HoatDongTaiXeDto[];
    selectedHoatDongTaiXe: Group9HoatDongTaiXeDto;
    HoatDongTaiXeInput: Group9HoatDongTaiXeDto = new Group9HoatDongTaiXeDto();
    lichTrinh: Group9LichTrinhDto = new Group9LichTrinhDto();
    listTaiXe: Group4LichTrinhDto[];
    selectedTaiXe: Group4LichTrinhDto;
    taiXeLichTrinhInput: Group4LichTrinhDto = new Group4LichTrinhDto();

    DRIVER_ID: number;
    START_DATE: Date;
    END_DATE: Date;
    user_name: string;

    listScheduleID: Group4LichTrinhDto[];
    lichTrinhInput: Group4LichTrinhDto = new Group4LichTrinhDto();
    selectedDropdownLichTrinh: Group4LichTrinhDto;

    listResult: Group4LichTrinhDto[];

    lichtrinh_ma: number;
    lichtrinh_ngaytao: string;
    lichtrinh_ngayden: string


    loaiXeInput: Group4LoaiXeDto = new Group4LoaiXeDto();
    selectedLoaiXe: Group4LichTrinhDto;

    hangxe: string;
    namsanxuat: string;
    dinhmucnguyenlieu: number;

    listMaLichTrinhByTaiXe: Group4LichTrinhDto[];
    taiXeInput: Group4LichTrinhDto = new Group4LichTrinhDto();
    selectedLichTrinh: Group4LichTrinhDto;
    SCHEDULE_ID: number;

    listScheduleID_unquiet: Group4LichTrinhDto[];

    getMaLichTrinhByTaiXe() {
        this.taiXeInput.lichTrinh_MaTaiXe = this.DRIVER_ID;
        this.group4LichTrinhProxy.lICHTRINH_Group4Search(this.taiXeInput).subscribe((result) => {
            this.listMaLichTrinhByTaiXe = result;
        });
    }

    onOptionsSelected(event) {
        if(this.DRIVER_ID==0){
             this.GetAll();
        }
        else
            this.getMaLichTrinhByTaiXe()
    }

    GetAll(): void {
        this.primengTableHelper.showLoadingIndicator();
        this.group9HoatDongService.hOATDONGTAIXE_Group9SearchAll().subscribe((result) => {
            let no = 1; 
            result.forEach((item) => {
                item["no"] = no++;
            });

            this.primengTableHelper.totalRecordsCount = result.length;
            this.primengTableHelper.records = result;
            this.primengTableHelper.hideLoadingIndicator();

        });
    }

    search() {
        this.getData();
        this.primengTableHelper.showLoadingIndicator();
        this.group9HoatDongService.hOATDONGTAIXE_Group9Tracking(this.DRIVER_ID, this.SCHEDULE_ID, moment(this.START_DATE), moment(this.END_DATE)).subscribe((result) => {
            let no = 1;
            result.forEach((item) => {
                item["no"] = no++;
            });
            this.primengTableHelper.totalRecordsCount = result.length;
            this.primengTableHelper.records = result;
            this.primengTableHelper.hideLoadingIndicator();
        });
    }
    selectOption(id: number) {
        this.search()
      }


    ngOnInit() {
        this.GetAll();

    }

    ngAfterViewInit(): void {

    }

    getData(){
        this.HoatDongTaiXeInput.ma = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_Ma = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_MaLichTrinh =this.SCHEDULE_ID;
        this.HoatDongTaiXeInput.hoatDongTaiXe_MaXe = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_MaTaiXe = this.DRIVER_ID;
        if(this.START_DATE == null)
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayBatDau = null
        else
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayBatDau = moment(this.START_DATE,  'YYYY-MM-DD');
        if(this.END_DATE == null)
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayKetThuc = null
        else
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayKetThuc = moment(this.END_DATE, 'YYYY-MM-DD');
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayTao = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_NguoiTao = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_NhienLieu = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_TrangThai = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_KmUocTinh = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_KmThucTe = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_NguoiDuyet = null;
        this.HoatDongTaiXeInput.hoatDongTaiXe_NgayDuyet = null;
    }
    delete(){
        let self = this;
        self.message.confirm(
            self.l('Xoá ?', this.currentId),
            this.l('AreYouSure'),
            isConfirmed => {
                if (isConfirmed) {
                    this.group9HoatDongService.hOATDONGTAIXE_Group9Delete(this.currentId).subscribe((response) => {
                        if (response["Result"] === "1") {
                            this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                        } else {
                            this.notify.success("Xóa thành công", "SUCCESS", environment.opt);
                            //this.resetOptions();
                            this.currentId = null;
                            this.search();
                        }
                    });
                }
            }
        );
    }
}
