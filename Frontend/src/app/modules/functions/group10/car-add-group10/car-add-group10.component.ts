import { Component,
  Injector,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  OnInit,} from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";
import { environment } from 'environments/environment';
import {Group10ServiceProxy,Group10XeDto,Group4LoaiXeServiceProxy,Group4LoaiXeDto
} from "@shared/service-proxies/service-proxies";
@Component({
  selector: 'app-car-add-group10',
  templateUrl: './car-add-group10.component.html',
  styleUrls: ['./car-add-group10.component.css', '../../style.less']
})
export class CarAddGroup10Component extends AppComponentBase implements OnInit {
  constructor(injector: Injector,private group10: Group10ServiceProxy,private group4: Group4LoaiXeServiceProxy) {
    super(injector);
 
  }

  noSpecial: RegExp = /^[^<>^$@#*!#&%]+$/

  tenxe: string;
  mauxe: string;
  soluong: number;
  giaxe: string;
  biensoxe: string;
  namsanxuat: number;
  hangxe: string;
  dinhmucnguyenlieu: number;
  
  luudialog: boolean;

  listLoaiXe: Group4LoaiXeDto[];
  loaiXeInput: Group4LoaiXeDto =new Group4LoaiXeDto();
  selectedLoaiXe: Group4LoaiXeDto;

  xe: Group10XeDto=new Group10XeDto();


  getLoaiXe(): void {
    this.group4.lOAIXE_Group4Search(this.loaiXeInput).subscribe((result) => {     
      this.listLoaiXe=result;      
    });
  }

  insert(): void{
    this.getValue();
    this.group10.group10_Xe_Insert(this.xe).subscribe((response) => {
      if (response["Result"] == "1") {
          this.notify.error(response["ErrorDesc"],"ERROR", environment.opt);
      } else {
          this.notify.success("Thêm xe thành công","SUCCESS", environment.opt);
      }
  });
  }

  luuconfirm(){
    if(this.checkvalue()==true)
    {
      this.luudialog=true;
    }
  }  

  huyconfirm(){
      this.tenxe=null;
      this.soluong=null;
      this.mauxe=null;
      this.giaxe=null;
      this.biensoxe=null;
      this.selectedLoaiXe=null;
      this.hangxe=null;
      this.namsanxuat=null;
      this.dinhmucnguyenlieu=null;
  }  

  getValue(){
    this.xe.xe_Ten=this.tenxe;
    this.xe.soLuong=this.soluong;
    this.xe.xe_Mau=this.mauxe;
    this.xe.xe_Gia=parseInt(this.giaxe.split(',').join(""));
    if(this.soluong!=1){
      this.xe.xe_BienSo=null;
    }
    else {
      this.xe.xe_BienSo=this.biensoxe;
    }
    this.xe.xe_MaLoaiXe=this.selectedLoaiXe.ma;
    this.xe.xe_NguoiTao=this.appSession.user.userName;
  }

  checkvalue(): boolean{
    if(this.selectedLoaiXe==null){
      this.notify.error("Bạn chưa chọn loại xe", "ERROR", environment.opt);
      return false;
    }
    if(this.tenxe==null||this.tenxe==""){
      this.notify.error("Bạn chưa nhập tên xe", "ERROR", environment.opt);
      return false;
    }
    if(this.soluong==null){
      this.notify.error("Bạn chưa nhập số lượng xe", "ERROR", environment.opt);
      return false;
    }
    if(this.soluong%1!=0){
      this.notify.error("Số lượng xe phải là số nguyên", "ERROR", environment.opt);
      return false;
    }
    if(this.soluong<=0 ){
      this.notify.error("Số lượng xe phải lớn hơn 0", "ERROR", environment.opt);
      return false;
    }
    if(this.mauxe==null||this.mauxe==""){
      this.notify.error("Bạn chưa nhập màu xe", "ERROR", environment.opt);
      return false;
    }
    if(this.giaxe==null||this.giaxe==""){
      this.notify.error("Bạn chưa nhập giá xe", "ERROR", environment.opt);
      return false;
    }
    if(this.soluong==1&&(this.biensoxe==null||this.biensoxe=="")){
      this.notify.error("Bạn chưa nhập biển số xe", "ERROR", environment.opt);
      return false;
    }
    return true;
  }

  selectDropDown(){ 
      this.hangxe=this.selectedLoaiXe.loaiXe_Hang;
      this.namsanxuat=this.selectedLoaiXe.loaiXe_NamSX;
      this.dinhmucnguyenlieu=this.selectedLoaiXe.loaiXe_DinhMucNhienLieu;
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
  resetbienso(value){
   if(value.target.value>1){
     this.biensoxe=null;
   }
  }
  ngOnInit() {
  this.getLoaiXe();
  }

}
