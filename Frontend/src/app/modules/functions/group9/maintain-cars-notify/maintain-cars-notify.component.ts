import { environment } from './../../../../../environments/environment.prod';
import { Component, ViewChild, OnInit, AfterViewInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/components/table/table";
import { Paginator } from "primeng/primeng";
import { Group9BaoTriServiceProxy, Group9BaoTriDto, Group4XeDto, Group4XeServiceProxy, Group10ServiceProxy, Group4LichTrinhServiceProxy, Group9XeDto } from '@shared/service-proxies/service-proxies';
import {
    Group4LoaiXeDto,
    Group4LoaiXeServiceProxy,

} from "@shared/service-proxies/service-proxies";


@Component({
    selector: 'app-maintain-cars-notify',
    templateUrl: './maintain-cars-notify.component.html',
    styleUrls: ['./maintain-cars-notify.component.css', '../../style.less']
})


export class MaintainCarsNotifyComponent extends AppComponentBase implements OnInit, AfterViewInit {
    /**
     *
     */
    @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;
    constructor(injector: Injector, private Group4LoaiXeServiceProxy: Group4LoaiXeServiceProxy,
        private group4XeService: Group4XeServiceProxy,
        private group9BaoTriServiceProxy: Group9BaoTriServiceProxy,
        private group9BaoTriService: Group9BaoTriServiceProxy,) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;
        this.group9BaoTriService.bAOTRI_Group9SearchXeInMaintain().subscribe(response => {
            this.xe_list = response;
        })
        this.group9BaoTriService.bAOTRI_Group9SearchAll().subscribe(response => {
            this.baotri_list_id = response;
        })

        this.trangthai_list = [
            { content: "Đã duyệt", value: "A" },
            { content: "Chờ duyệt", value: "N" }
        ];

        this.tinhtrang_list = [
            { content: "Chưa đi bảo trì", value: "C" },
            { content: "Đang đi bảo trì", value: "D" }
        ];

        console.log(this);
    }

    currentUserName: string;
    ngOnInit() {
         
    }
    ngAfterViewInit(): void {
        this.search();
    }
    trangthai_list: TrangThai[];
    tinhtrang_list: TinhTrang[];


    MA_XE: string = "maXe";
    baotri_maxe: number;
    selectedLevel: number;
    selectedLevel2: number;
    selectedLevel3: string;
    selectedLevel4: string;
    maNG: string;

    xe_list: Group9XeDto[];
    baotri_list: Group9BaoTriDto[];
    baotri_list_id: Group9BaoTriDto[];
    group9BaoTriInput: Group9BaoTriDto = new Group9BaoTriDto();
    group9BaoTriRowInput: Group9BaoTriDto = new Group9BaoTriDto();





    carFuelSuggestions: Array<object> = [];

    baotri_group9_ma: Array<object> = [];

    baotri_group9_maxe: Array<object> = [];

    baotri_group9_ngaybaotri: Array<object> = [];

    baotri_group9_ngayxuatxuong: Array<object> = [];

    baotri_group9_thanhtien: Array<object> = [];

    baotri_group9_nguoitao: Array<object> = [];

    baotri_group9_ngaytao: Array<object> = [];

    // Some stuff
    curMaBaoTri: number;
    baoTriInput: Group9BaoTriDto = new Group9BaoTriDto();
    baoTriRecords: Group9BaoTriDto[] = [];

    onKeyUp(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }

    delete() {
        let self = this;
        self.message.confirm(
            self.l('Xoá ?', this.curMaBaoTri),
            this.l('AreYouSure'),
            isConfirmed => {
                if (isConfirmed) {
                    this.group9BaoTriService.bAOTRI_Group9Delete(this.curMaBaoTri).subscribe((response) => {
                        if (response["Result"] === "1") {
                            this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                        } else {
                            this.notify.success("Xóa thành công", "SUCCESS", environment.opt);
                            //this.resetOptions();
                            this.curMaBaoTri = null;
                            this.search();
                        }
                    });
                }
            }
        );
    }




    search() {
        // show loading trong gridview
        this.getValue();
        this.primengTableHelper.showLoadingIndicator();
        this.group9BaoTriService.bAOTRI_Group9Search(this.group9BaoTriInput)
            .subscribe((result) => {
                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                result.length < 1 && this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
    }




    getListThongBao() {
        this.group9BaoTriService.bAOTRI_Group9Search({} as any).subscribe(response => {
            this.baotri_list = response;
        });

    }
    get() {

        this.group9BaoTriService.bAOTRI_Group9ById(this.curMaBaoTri).subscribe(response => {
            this.group9BaoTriRowInput = response;
            this.maNG = this.group9BaoTriRowInput.baoTri_MaNguoiGui;
            if (response.baoTri_NgayBaotri == null) {

                this.group9BaoTriService.bAOTRI_Group9SendNotification(this.maNG, this.group9BaoTriRowInput.baoTri_MaBaoTri, this.group9BaoTriRowInput.baoTri_MaXe, this.group9BaoTriRowInput.baoTri_NgayDuyet, 0).subscribe((response) => {
                    if (response["Result"] === "1") {
                        this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                    } else {
                        this.notify.success("Gửi thành công", "SUCCESS", environment.opt);
                        //this.resetOptions();
                        this.curMaBaoTri = null;
                    }
                });
            }
            else {
                this.group9BaoTriService.bAOTRI_Group9SendNotification(response.baoTri_NguoiTao, this.group9BaoTriRowInput.baoTri_MaBaoTri, this.group9BaoTriRowInput.baoTri_MaXe, this.group9BaoTriRowInput.baoTri_NgayDuyet, 1).subscribe((response) => {
                    if (response["Result"] === "1") {
                        this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                    } else {
                        this.notify.success("Gửi thành công", "SUCCESS", environment.opt);
                        //this.resetOptions();
                        this.curMaBaoTri = null;
                    }
                });
            }
        });
    }
    getValue() {
        this.group9BaoTriInput.ma = this.selectedLevel2;
        this.group9BaoTriInput.baoTri_MaBaoTri = null;
        this.group9BaoTriInput.baoTri_MaXe = this.selectedLevel;
        this.group9BaoTriInput.baoTri_MaBaoTri = null;
        this.group9BaoTriInput.baoTri_TinhTrangBaoTri = this.selectedLevel4;
        this.group9BaoTriInput.baoTri_NgayDuyet = null;
        this.group9BaoTriInput.baoTri_NgayTao = null;
        this.group9BaoTriInput.baoTri_NgayXuatXuong = null;
        this.group9BaoTriInput.baoTri_NguoiTao = null;
        this.group9BaoTriInput.baoTri_TrangThai = this.selectedLevel3;
        this.group9BaoTriInput.baoTri_ThanhTien = null;
        this.group9BaoTriInput.baoTri_NoiBaoTri = null;
        this.group9BaoTriInput.baoTri_GhiChu = null;
        this.group9BaoTriInput.baoTri_NguoiDuyet = null;
        // console.log(`[getValue] loainhienlieu: ${this.loainhienlieu}`);
    }
    selectOption(id: number) {


        this.search()

    }
    searchAll() {
        this.group9BaoTriInput.ma = null;
        this.group9BaoTriInput.baoTri_MaBaoTri = null;
        this.group9BaoTriInput.baoTri_MaXe = null;
        this.group9BaoTriInput.baoTri_MaBaoTri = null;
        this.group9BaoTriInput.baoTri_TinhTrangBaoTri = null;
        this.group9BaoTriInput.baoTri_NgayDuyet = null;
        this.group9BaoTriInput.baoTri_NgayTao = null;
        this.group9BaoTriInput.baoTri_NgayXuatXuong = null;
        this.group9BaoTriInput.baoTri_NguoiTao = null;
        this.group9BaoTriInput.baoTri_TrangThai = null;
        this.group9BaoTriInput.baoTri_ThanhTien = null;
        this.group9BaoTriInput.baoTri_NoiBaoTri = null;
        this.group9BaoTriInput.baoTri_GhiChu = null;
        this.group9BaoTriInput.baoTri_NguoiDuyet = null;
        this.selectedLevel = null;
        this.selectedLevel4 = null;
        this.selectedLevel2 = null;
        this.selectedLevel3 = null;
        this.primengTableHelper.showLoadingIndicator();
        this.group9BaoTriService.bAOTRI_Group9Search(this.group9BaoTriInput)
            .subscribe((result) => {
                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                result.length < 1 && this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });

    }


}

export class TinhTrang {
    content: string;
    value: string;
}
export class TrangThai {
    content: string;
    value: string;
}
