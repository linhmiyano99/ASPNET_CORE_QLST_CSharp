import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { NgForm } from '@angular/forms';
import { Group3DeXuatServiceProxy, Group3BangGiaServiceProxy, Group3DeXuatDto, Group3BangGiaDto } from '@shared/service-proxies/service-proxies';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-dx-car-add-group3',
  templateUrl: './dx-car-add-group3.component.html',
  styleUrls: ['./dx-car-add-group3.component.css', '../../style.less']
})
export class DxCarAddGroup3Component extends AppComponentBase implements OnInit {
  carName: string;
  manufacturer: string;
  color: string;
  manuYear: number;
  amount: number;
  saler: any = [];
  price: any = [];
  recommendPrices = [{ price: null, saler: null }, { price: null, saler: null }, { price: null, saler: null }];

  reason: string;
  purpose: string;

  group3DeXuatAddInput: Group3DeXuatDto = new Group3DeXuatDto();
  group3BangGiaAddInput: Group3BangGiaDto = new Group3BangGiaDto();
  submitted = false;

  constructor(injector: Injector, private group3DeXuatService: Group3DeXuatServiceProxy, private group3BangGiaService: Group3BangGiaServiceProxy) {
    super(injector);
  }

  setValue() {
    this.group3DeXuatAddInput.deXuat_TenXe = this.carName;
    this.group3DeXuatAddInput.deXuat_Mau = this.color;
    this.group3DeXuatAddInput.deXuat_SoLuong = this.amount;
    this.group3DeXuatAddInput.deXuat_LyDo = this.reason;
    this.group3DeXuatAddInput.deXuat_MucDich = this.purpose;
    this.group3DeXuatAddInput.deXuat_SoLuong = this.amount;

    this.group3BangGiaAddInput.chuThau = [];
    this.group3BangGiaAddInput.gia = [];
    for (let index = 0; index < this.recommendPrices.length; index++) {
      this.saler.push(this.recommendPrices[index].saler);
      this.price.push(this.recommendPrices[index].price);
    }
    this.group3BangGiaAddInput.soLuong = this.recommendPrices.length;
  }

  checkInputValue(): boolean {
    if (this.carName == null || this.carName == '') {
      this.notify.error(this.l("Vui lòng nhập tên xe", "ERROR", environment.opt));
      return false;
    }
    if (this.manufacturer == null || this.manufacturer == '' || !!this.manufacturer.match(/a-zA-Z0-9/i)) {
      this.notify.error(this.l("Vui lòng nhập hãng xe", "ERROR", environment.opt));
      return false;
    }
    if (this.color == null || this.color == '') {
      this.notify.error(this.l("Vui lòng nhập màu xe", "ERROR", environment.opt));
      return false;
    }
    if (this.reason == null || this.reason == '') {
      this.notify.error(this.l("Vui lòng nhập lý do", "ERROR", environment.opt));
      return false;
    }
    if (this.purpose == null || this.purpose == '') {
      this.notify.error(this.l("Vui lòng nhập mục đích", "ERROR", environment.opt));
      return false;
    }
    if (this.amount == null  || this.amount < 1) {
      this.notify.error(this.l("Vui lòng nhập số lượng phù hợp (> 1)", "ERROR", environment.opt));
      return false;
    }
    if (this.manuYear == null || this.manuYear <= 1886 || this.manuYear > new Date().getFullYear()) {
      this.notify.error(this.l(`Vui lòng nhập năm phù hợp (1886 < năm < ${new Date().getFullYear()})`, "ERROR", environment.opt));
      return false;
    }
    if (this.saler.includes(null)) {
      this.notify.error(this.l("Vui lòng nhập chủ thầu phù hợp", "ERROR", environment.opt));
      return false;
    } else {
      this.group3BangGiaAddInput.chuThau = this.saler;
    }
    if (this.price.includes(null)) {
      this.notify.error(this.l("Vui lòng nhập bảng giá phù hợp", "ERROR", environment.opt));
      return false;
    } else {
      this.group3BangGiaAddInput.gia = this.price;
    }
    return true;
  }

  onSubmit(f: NgForm) {
    this.setValue();

    if (this.checkInputValue() == false) return;

    this.group3DeXuatService.deXuat_Group3Insert(this.group3DeXuatAddInput).subscribe((response) => {
      if (response["Result"] == "1") {
        this.notify.error(this.l("Thêm đề xuất xe thất bại", "ERROR", environment.opt));
        this.cancel();
        window.location.reload();
      } else {
        this.notify.info(this.l("Thêm đề xuất xe thành công"));
      }
      this.group3BangGiaService.bangGia_Group3Insert(this.group3BangGiaAddInput).subscribe((response) => {
        if (response["Result"] == "1") {
          this.notify.error(this.l("Thêm bảng giá thất bại", "ERROR", environment.opt));
          this.cancel();
          window.location.reload();
        } else {
          this.notify.info(this.l("Thêm bảng giá thành công"));
        }
      });
    });
  }                 

  addPriceItem() {
    this.recommendPrices.push({ price: null, saler: null });
    console.log(this.recommendPrices);
  }

  cancel() {
    this.carName = null;
    this.color = null;
    this.amount = null;
    this.reason = null;
    this.purpose = null;
    this.amount = null;
    this.saler = [];
    this.price = [];
  }

  ngOnInit() {
    this.amount = 1;
  }

}
