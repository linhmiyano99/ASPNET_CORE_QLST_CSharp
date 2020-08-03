import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { environment } from 'environments/environment';
import { Group8DeXuatServiceProxy, Group7PheDuyetXeServiceProxy, Group7DeXuatDto, Group7DeXuatBangGiaDto } from '@shared/service-proxies/service-proxies.ts';
import { Validators, FormGroup, FormControl, FormBuilder, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-dx-car-edit-group8',
  templateUrl: './dx-car-edit-group8.component.html',
  styleUrls: ['./dx-car-edit-group8.component.css', '../../style.less'],
})
export class DxCarEditGroup8Component extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private dxService: Group8DeXuatServiceProxy, private searchDX: Group7PheDuyetXeServiceProxy, private formBuilder: FormBuilder) {
    super(injector);
    //Mình để nhập cứng vào đây tạm, khi nào có màn hình quản lý mình sẽ nối với api lấy thông tin xe từ mã xe
    this.dxInput.ma = 2;
    this.getDX();
  }
  prices = [];
  dx_control: FormGroup;
  ngOnInit() {
    this.dx_control = this.formBuilder.group({
      deXuat_MaLoaiXe: [''],
      deXuat_TenXe: [''],
      deXuat_Mau: [''],
      deXuat_MucDich: [''],
      deXuat_LyDo: [''],
      deXuat_TrangThai: [''],
      deXuat_MaBangGia: [''],
      deXuat_SoLuong: [''],
      deXuat_Hang: [''],
      loaiXe_Hang: [''],
      loaiXe_NamSX: [''],
      deXuatBangGia_Gia: [''],
      deXuatBangGia_ChuThau: [''],
    });
  }
  get f() { return this.dx_control.controls; }
  dxInput: Group7DeXuatDto = new Group7DeXuatDto();
  bangGiaDX: Group7DeXuatBangGiaDto = new Group7DeXuatBangGiaDto();

  addPrice() {
    this.prices.push({
      deXuatBangGia_Gia: '',
      deXuatBangGia_ChuThau: '',
    })
    console.table(this.prices);
  }

  save() {
    console.table(this.prices);
    this.dxService.dEXUAT_Group8Edit(
      this.dxInput.ma,
      this.dxInput.deXuat_MaLoaiXe,
      this.dxInput.deXuat_TenXe,
      this.dxInput.deXuat_Mau,
      this.dxInput.deXuat_MucDich,
      this.dxInput.deXuat_LyDo,
      this.dxInput.deXuat_TrangThai,
      this.dxInput.deXuat_NguoiTao,
      this.dxInput.deXuat_NgayTao,
      this.dxInput.deXuat_MaBangGia,
      this.dxInput.deXuat_SoLuong
    ).subscribe((response) => {
      if (response["Result"] == "1") {
        this.notify.error(response["ErrorDesc"], "ERROR", environment.opt);
      } else {
        this.notify.success("Lưu thành công", "SUCCESS", environment.opt);
      }
    });
  }

  async getDX() {
    this.searchDX.group7SelectDeXuat(this.dxInput.ma).subscribe((result) => {
      this.dxInput.deXuat_LyDo = result["deXuat_LyDo"];
      this.dxInput.deXuat_MaBangGia = result["deXuat_MaBangGia"];
      this.dxInput.deXuat_MaLoaiXe = result["deXuat_MaLoaiXe"];
      this.dxInput.deXuat_Mau = result["deXuat_Mau"];
      this.dxInput.deXuat_SoLuong = result["deXuat_SoLuong"];
      this.dxInput.deXuat_TenXe = result["deXuat_TenXe"];
      this.dxInput.loaiXe_Hang = result["loaiXe_Hang"];
      this.dxInput.loaiXe_NamSX = result["loaiXe_NamSX"];
      this.dxInput.deXuat_MucDich = result["deXuat_MucDich"];
      this.dxInput.deXuat_TrangThai = result["deXuat_TrangThai"];
    });
    for (let i = 0; i < this.dxInput.deXuat_MaBangGia; i++) {
      await this.searchDX.group7SelectBangGia(this.dxInput.deXuat_MaBangGia[i]).subscribe((result) => {
        this.prices.push({
          deXuatBangGia_Gia: result["deXuatBangGia_Gia"],
          deXuatBangGia_ChuThau: result["deXuatBangGia_ChuThau"],
        })
      });
    }
  }
}
