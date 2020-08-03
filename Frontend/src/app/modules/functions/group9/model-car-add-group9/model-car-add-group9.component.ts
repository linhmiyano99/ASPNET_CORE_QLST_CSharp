import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group9LoaiXeServiceProxy, Group9LoaiXeDto,Group9HangServiceProxy, Group9HangDto } from '@shared/service-proxies/service-proxies';
import { environment } from 'environments/environment';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";


@Component({
  selector: 'app-model-car-add-group9',
  templateUrl: './model-car-add-group9.component.html',
  styleUrls: ['./model-car-add-group9.component.css', '../../style.less']
})
export class ModelCarAddGroup9Component extends AppComponentBase implements AfterViewInit {

  constructor(injector: Injector,
     private group9LoaiXeService: Group9LoaiXeServiceProxy,
      private group9HangService: Group9HangServiceProxy) {
    super(injector);
    // this.carService.getCurrentUserName().subscribe(response=>{
    //   this.currentUserName = response;
    // })
    this.group9HangService.hang_Group9Search({} as any).subscribe(response=>{
      this.hang_list = response;
      })
      console.log(this);
  }

  hangxe: string;
  tenxe: string;
  namsanxuat: number;
  dinhmucnguyenlieu: number;
  loainhienlieu: string;

  luudialog:boolean;

  filterInput: Group9LoaiXeDto = new Group9LoaiXeDto();
  records: Group9LoaiXeDto[] = [];
  hang_list: Group9HangDto[] = [];
  group9LoaiXeInput: Group9LoaiXeDto = new Group9LoaiXeDto();
  currentId: number;
  saving = false;
  selectedLevel : string;


  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  
 
  getValue(){
    this.group9LoaiXeInput.loaiXe_Ten=this.tenxe;
    this.group9LoaiXeInput.loaiXe_Hang=this.selectedLevel;
    this.group9LoaiXeInput.loaiXe_NamSX=this.namsanxuat;
    this.group9LoaiXeInput.loaiXe_DinhMucNhienLieu=this.dinhmucnguyenlieu;
    this.group9LoaiXeInput.loaiXe_LoaiNhienLieu=this.loainhienlieu;
    console.log(`[getValue] loainhienlieu: ${this.loainhienlieu}`);
  }

  add() {
    this.getValue();
    if(this.checkvalue() == false) return null;
     this.group9LoaiXeService.lOAIXE_Group9Insert(this.group9LoaiXeInput).subscribe((response) => {
      if (response["Result"] == "1") {
        this.notify.error("Thêm loại xe thất bại", "ERROR", environment.opt);
        this.huyconfirm();
        
    } else{
      this.notify.info("Thêm loại xe thành công", "SUCCESS", environment.opt);}
    });
  }

  checkvalue(): boolean{
    if(this.tenxe==null || this.tenxe==''){
      this.notify.error("Bạn chưa nhập tên xe", "ERROR", environment.opt);
      return false;
    }
    else if(this.selectedLevel==null ||this.selectedLevel==''){
      this.notify.error("Bạn chưa nhập hãng xe", "ERROR", environment.opt);
      return false;
    }
    else if(this.namsanxuat==null){
      this.notify.error("Bạn chưa nhập năm sản xuất", "ERROR", environment.opt);
      return false;
    }
    else if(this.namsanxuat<=1950){
      this.notify.error("Năm phải lớn hơn 1950", "ERROR", environment.opt);
      return false;
    }
    else if(this.dinhmucnguyenlieu==null){
      this.notify.error("Bạn chưa nhập định mức nhiên liệu", "ERROR", environment.opt);
      return false;
    }
    else if(this.dinhmucnguyenlieu<=0){
      this.notify.error("Định mức nhiên liệu phải lớn hơn 0", "ERROR", environment.opt);
      return false;
    }
    else if(this.loainhienlieu == "" || this.loainhienlieu == null){
      this.notify.error("Bạn chưa chọn loại nhiên liệu", "ERROR", environment.opt);
      return false;
    }
    return true;
  }

  luuconfirm(){
    if(this.checkvalue()==true)
    {
      this.luudialog=true;
    }
  } 

  huyconfirm(){
    this.tenxe=null;
    this.loainhienlieu=null;
    this.selectedLevel=null;
    this.namsanxuat=null;
    this.dinhmucnguyenlieu=null;
}  

  ngOnInit() {
  }

}
