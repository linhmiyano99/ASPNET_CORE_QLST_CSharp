import { environment } from '../../../../../environments/environment.prod';
import { Component, ViewChild, OnInit, AfterViewInit, Injector, inject } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/components/table/table";
import { Paginator } from "primeng/primeng";
import {
    Group9HangServiceProxy, Group9HangDto

} from "@shared/service-proxies/service-proxies";

@Component({
    selector: 'app-manufacturer-car-add-group9',
    templateUrl: './manufacturer-car-add-group9.component.html',
    styleUrls: ['./manufacturer-car-add-group9.component.css', '../../style.less']
})


export class ManufacturerCarAddComponentGroup9 extends AppComponentBase implements OnInit, AfterViewInit {

    @ViewChild("dataTable") dataTable: Table;
    @ViewChild("paginator") paginator: Paginator;


    constructor(injector: Injector, private group9HangProxy: Group9HangServiceProxy) {
        super(injector);

    }

    Ten_Hang: string;
    Ma_Hang: string;

    HangXeInput: Group9HangDto = new Group9HangDto();

    Cancel_Dialog: boolean;
    Save_Dialog: boolean;

    insert(): void {
        this.getValue();
        this.group9HangProxy.hang_Group9Insert(this.HangXeInput).subscribe((response) => {
            if (response["Result"] == "1") {
                this.notify.error(response["ErrorDesc"], "ERROR", environment.opt);
            } else {
                this.notify.success("Thêm hãng xe thành công", "SUCCESS", environment.opt);
            }
        });
    }

    Save_Confirm() {
        if (this.checkvalue() == true) {
            let self = this;
            self.message.confirm(
                self.l('Bạn muốn lưu toàn bộ dữ liệu ?'),
                this.l('Lưu dữ liệu'),
                isConfirmed => {
                    if (isConfirmed) {
                        this.insert();
                    }
                }

            );
        }
    }

    Cancel_Confirm() {
        let self = this;
        self.message.confirm(
            self.l('Bạn muốn huỷ bỏ tiến trình ?'),
            this.l('Thoát'),
            isConfirmed => {
                if (isConfirmed) {
                    this.ClearAllInputValue();
                }
            }

        );
    }

    ClearAllInputValue() {
        this.Ma_Hang = null;
        this.Ten_Hang = null;
        this.ReturnToHomePage();
    }


    ReturnToHomePage() {
        this.router.navigate(['/app/admin/manufacturer-car']);
    }


    getValue() {
        if (this.checkvalue) {
            this.HangXeInput.hang_MaHang = this.Ma_Hang;
            this.HangXeInput.hang_TenHang = this.Ten_Hang;
        }

    }

    checkvalue(): boolean {
        if (this.Ma_Hang == null || this.Ma_Hang == "") {
            this.notify.error("Bạn chưa nhập mã hãng xe", "ERROR", environment.opt);
            return false;
        }
        if (this.Ten_Hang == null || this.Ten_Hang == "") {
            this.notify.error("Bạn chưa nhập tên hãng xe", "ERROR", environment.opt);
            return false;
        }
        return true;
    }


    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
    }
}
