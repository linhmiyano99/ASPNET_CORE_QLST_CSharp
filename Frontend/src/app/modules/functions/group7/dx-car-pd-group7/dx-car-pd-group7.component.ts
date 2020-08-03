import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group7DeXuatBangGiaDto, Group7DeXuatDto, Group7PheDuyetXeServiceProxy } from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-dx-car-pd-group7',
  templateUrl: './dx-car-pd-group7.component.html',
  styleUrls: ['./dx-car-pd-group7.component.css', '../../style.less']
})
export class DxCarPdGroup7Component extends AppComponentBase implements OnInit,AfterViewInit {

  constructor(injector: Injector, private dexuatService: Group7PheDuyetXeServiceProxy,) {
    super(injector);
  }
  displayModal: boolean;
  displayBasic: boolean;
  lydotuchoi:string='';
  mucdich:string=null;
  banggia: Group7DeXuatBangGiaDto=new Group7DeXuatBangGiaDto;
  dexuat: Group7DeXuatDto[]=[];
  dexuatInput: Group7DeXuatDto=new Group7DeXuatDto;
  maphieudexuat:number;
  showModalDialog() {
    this.displayModal = true;
  }
  listBangGia(number){  
    this.primengTableHelper.showLoadingIndicator();
    this.dexuatService.group7SelectBangGia(number).subscribe((result)=> {
       let no=1;
        result.forEach(item=>{
            item['banggia']="Bảng giá " + no;
            item['chuthau']="Chủ thầu " + no;
            no++;
        })
      this.primengTableHelper.totalRecordsCount=result.length;
      this.primengTableHelper.records=result;
      this.primengTableHelper.hideLoadingIndicator();
    });
  }
  selectPhieuDeXuat(number){
    this.dexuatService.group7SelectDeXuat(number).subscribe((result)=> {
      this.dexuat=result;
      this.dexuatInput=this.dexuat[0];
      })
  }
  approvePhieuDeXuat(){
    if(this.dexuatInput.deXuat_NguoiTao!=this.appSession.user.userName)
    {
        this.dexuatService.group7Approve(this.dexuatInput.ma,this.banggia.ma,this.dexuatInput.deXuat_LyDo).subscribe((response)=>{
            if(response['Result']=="1"){
                this.notify.error(response["ErrorDesc"],"ERROR",environment.opt);
            } else {
                this.notify.info(this.l('Phiếu đã được duyệt thành công'),"SUCCESS",environment.opt);
            }
        })   
      } else this.notify.info(this.l('Người phê duyệt cần khác người đề xuất'),"ERROR",environment.opt);
  }
  rejectPhieuDeXuat(){
    if(this.dexuatInput.deXuat_NguoiTao!=this.appSession.user.userName){
        this.dexuatService.group7Reject(this.dexuatInput.ma,this.lydotuchoi).subscribe((response)=>{
            if(response['Result']=="1"){
                this.notify.error(response["ErrorDesc"],"ERROR",environment.opt);
            } else {
                this.notify.info(this.l('Phiếu này đã được từ chối'),"SUCCESS",environment.opt);
            }
        })  
        this.displayBasic=false; 
      }else this.notify.error(this.l('Người phê duyệt cần khác người đề xuất'),"ERROR",environment.opt);
  }
  showBasicDialog() {
  this.displayBasic = true;
  }

  ngOnInit() {
    this.maphieudexuat=JSON.parse(localStorage.getItem("ma"));
    this.selectPhieuDeXuat(1);
    this.listBangGia(1);
  }
  ngAfterViewInit()
  {
    this.maphieudexuat=JSON.parse(localStorage.getItem("ma"));
  }
}
