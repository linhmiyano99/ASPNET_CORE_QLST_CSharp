import { Component, OnInit, AfterViewInit, Injector, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import {
    Group9HangServiceProxy, Group9HangDto

} from "@shared/service-proxies/service-proxies";
import { Table } from 'primeng/table';
import { Paginator } from 'primeng/primeng';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-manufacturer-car-group9',
    templateUrl: './manufacturer-car-group9.component.html',
    styleUrls: ['./manufacturer-car-group9.component.css', '../../style.less']
})


export class ManufacturerCarComponentGroup9 extends AppComponentBase implements OnInit, AfterViewInit {

    empty_value: any[];

    @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;

    constructor(injector: Injector, private group9HangProxy: Group9HangServiceProxy) {
        super(injector);
        this.empty_value = [
            { name: "Tất cả", value: "all" }
        ]

    }
    currentId: number;
    listHangXe: Group9HangDto[];
    HangXeInput: Group9HangDto = new Group9HangDto();
    selectedHangXe: Group9HangDto;

    selectedMaHang: string;
    selectedTenHang: string;


    GetAll() {
        this.primengTableHelper.showLoadingIndicator();
        this.group9HangProxy.hang_Group9SearchAll().subscribe((result) => {
            this.listHangXe = result;
            let no = 1;
            result.forEach((item) => {
                item["no"] = no++;
            });
            this.primengTableHelper.totalRecordsCount = result.length;
            this.primengTableHelper.records = result;
            this.primengTableHelper.hideLoadingIndicator();

        });
    }



    onOptionsSelected_MaHang() {
        this.selectedTenHang = "all";
        if (this.selectedMaHang == "all") {
            this.GetAll();
        }
        else {
            this.HangXeInput.hang_MaHang = this.selectedMaHang;
            this.HangXeInput.hang_TenHang = null;
            this.primengTableHelper.showLoadingIndicator();
            this.group9HangProxy.hang_Group9Search(this.HangXeInput).subscribe((result) => {

                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
        }

    }
    onOptionsSelected_TenHang() {
        this.selectedMaHang = "all";
        if (this.selectedTenHang == "all") {
            this.GetAll();
        }
        else {
            this.HangXeInput.hang_MaHang = null;
            this.HangXeInput.hang_TenHang = this.selectedTenHang;
            this.primengTableHelper.showLoadingIndicator();
            this.group9HangProxy.hang_Group9Search(this.HangXeInput).subscribe((result) => {

                let no = 1;
                result.forEach((item) => {
                    item["no"] = no++;
                });
                this.primengTableHelper.totalRecordsCount = result.length;
                this.primengTableHelper.records = result;
                this.primengTableHelper.hideLoadingIndicator();
            });
        }
    }

    delete() {
        let self = this;
        let currentID = this.currentId;
        if (currentID == null) {
            this.message.error("Vui lòng chọn hãng xe để xoá", "Lỗi");
        }
        else {
            self.message.confirm(
                self.l('Bạn chắc chắn muốn xoá hãng xe này', this.currentId),
                this.l('Xoá Hãng Xe'),
                isConfirmed => {
                    if (isConfirmed) {
                        this.group9HangProxy.hang_Group9Delete(this.currentId).subscribe((response) => {
                            if (response["Result"] === "1") {
                                this.notify.error("Không tìm thấy dữ liệu", "ERROR", environment.opt);
                            } else {
                                this.notify.success("Xóa hãng xe thành công", "SUCCESS", environment.opt);
                                this.currentId = null;
                                this.GetAll();
                            }
                        });
                    }
                }

            );
        }

    }
    ngOnInit(): void {
        this.GetAll();
    }
    ngAfterViewInit(): void {
    }


}
