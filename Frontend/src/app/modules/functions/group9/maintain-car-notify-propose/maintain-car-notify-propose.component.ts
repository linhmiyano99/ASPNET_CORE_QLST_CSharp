import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group9BaoTriServiceProxy, Group9BaoTriDto, Group4XeServiceProxy, Group4XeDto} from '@shared/service-proxies/service-proxies';
import { environment } from 'environments/environment';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";
import * as moment from 'moment';
import { Console } from 'console';
import { now } from 'jquery';


@Component({
  selector: 'app-maintain-car-notify-propose-group9',
  templateUrl: './maintain-car-notify-propose.component.html',
  styleUrls: ['./maintain-car-notify-propose.component.less']
})
export class MaintainCarNotifyProposeComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector, private group9BaoTriService: Group9BaoTriServiceProxy,
    private group4XeService: Group4XeServiceProxy, ) {
    super(injector);
    this.group9BaoTriService.getCurrentUserName().subscribe(response=>{
      this.currentUserName = response;
    })
    this.group4XeService.xE_Group4Search({} as any).subscribe(response=>{
        this.xe_list = response;
    })

    this.kyhan_list = [
      { content: "Tất cả", value: 0 },
        { content: "Xe sắp tới hạn bảo trì", value: 1 },
        { content: "Xe đã quá hạn bảo trì", value: 2 }
    ];
    
    console.log(this);
}

currentUserName: string
maxe: number;
bienso:string;
mataixe: number;
ghichu: string;
nguoigui: string;

luudialog: boolean;

filterInput: Group9BaoTriDto = new Group9BaoTriDto();
records: Group4XeDto[] = [];
group9BaoTriInput: Group9BaoTriDto = new Group9BaoTriDto();
group4XeRow: Group4XeDto = new Group4XeDto();
curMaBaoTri: number;
saving = false;
carManufacturerOpt: object = {};
xe_list : Group4XeDto[];


ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
}



getValue() {

    this.group9BaoTriInput.baoTri_MaBaoTri = null;
    this.group9BaoTriInput.baoTri_MaXe = this.curMaBaoTri;
    this.group9BaoTriInput.baoTri_TinhTrangBaoTri = "C";
    this.group9BaoTriInput.baoTri_NoiBaoTri = null;
    this.group9BaoTriInput.baoTri_NgayDuyet = null;
    this.group9BaoTriInput.baoTri_NgayXuatXuong = null;
    this.group9BaoTriInput.baoTri_TrangThai = "U";
    this.group9BaoTriInput.baoTri_ThanhTien = null;
    this.group9BaoTriInput.baoTri_MaTaiXe = null;
    this.group9BaoTriInput.baoTri_MaNguoiGui = "admin"; 
    this.group9BaoTriInput.baoTri_NguoiTao = this.currentUserName;
    this.group9BaoTriInput.baoTri_NgayTao = null;
    this.group9BaoTriInput.baoTri_GhiChu = "Bảo trì định kỳ";

    // console.log(`[getValue] loainhienlieu: ${this.loainhienlieu}`);
    this.group4XeRow.ma = this.maxe;
}

commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

formatCurrency(getValue){

    $('#Gia').val(this.commaSeparateNumber($('#Gia').val().toString().split(',').join("")));
 
  }

add() {
    this.getValue();
  if(this.selectedLevel2 == 2)
    this.group9BaoTriInput.baoTri_NgayBaotri = moment();
    else 
    this.group9BaoTriInput.baoTri_NgayBaotri= null;
    this.group9BaoTriService.bAOTRI_Group9Insert(this.group9BaoTriInput).subscribe((response) => {
        if (response["Result"] == "1") {
            this.notify.error("Thêm đề xuất thất bại", "ERROR", environment.opt);
            this.huyconfirm();
        } else {
            this.notify.success("Thêm đề xuất thành công", "SUCCESS", environment.opt);
            this.notify.error("Kết quả", response.baoTri_NgayBaotri, environment.opt);
            this.curMaBaoTri = null;
            this.group9BaoTriInput.baoTri_NgayBaotri= null;
            if(this.selectedLevel2 == 1){
                this.searchDenHan();
            }
            else if(this.selectedLevel2 == 2){
              this.searchQuaHan();
          }
          else{
            this.searchAll();
          }
        }
    });

}

insert(): void{
this.getValue();
this.group9BaoTriService.bAOTRI_Group9Insert(this.group9BaoTriInput).subscribe((response) => {
  if (response["Result"] == "1") {
      this.notify.error(response["ErrorDesc"],"ERROR", environment.opt);
  } else {
      this.notify.success("Thêm xe thành công","SUCCESS", environment.opt);
  }
});
}

checkvalue(): boolean {
    if (this.maxe == null) {
        this.notify.error("Bạn chưa nhập mã xe", "ERROR", environment.opt);
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
    this.group9BaoTriInput.baoTri_NgayBaotri = null;
}

ngOnInit() {
}
/////////////////////////////////////////////////

  //Car Fuel
  noidung: string;
  ma: string;
  kyhan_list : KyHan[];


  selectedLevel2:number;

  selectOption2(id: number) {
    //getted from event
    console.log(id);
    //getted from binding
    console.log(this.selectedLevel2)
    this.deleteAll();
    if(this.selectedLevel2 == 1){
        this.searchDenHan();
    }
    else if(this.selectedLevel2 == 2){
        this.searchQuaHan();
    }
    else{
      this.searchAll();
    }
    
    this.notify.error("Không tìm thấy dữ liệu", this.curMaBaoTri.toString(), environment.opt)
  }
  search() {
    // show loading trong gridview
    this.getValue();
    this.primengTableHelper.showLoadingIndicator();
    this.group4XeService.xE_Group4Search({} as any)
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

deleteAll() {
    // show loading trong gridview
    this.primengTableHelper.records = null;
    this.primengTableHelper.hideLoadingIndicator();

}

searchDenHan() {
    // show loading trong gridview
    this.getValue();
    this.primengTableHelper.showLoadingIndicator();
    this.group9BaoTriService.bAOTRI_Group9ShouldMaintain()
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
searchQuaHan() {
    // show loading trong gridview
    this.getValue();
    this.primengTableHelper.showLoadingIndicator();
    this.group9BaoTriService.bAOTRI_Group9UrgentMaintain()
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

searchAll() {
  // show loading trong gridview
  this.getValue();
  this.primengTableHelper.showLoadingIndicator();
  this.group9BaoTriService.bAOTRI_Group9MaintainAll()
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
propose(){

    this.add();
}

}

export class KyHan{
content: string;
value: number;
}