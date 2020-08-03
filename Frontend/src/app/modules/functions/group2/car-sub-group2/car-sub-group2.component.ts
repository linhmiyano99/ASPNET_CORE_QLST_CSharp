import { Group2RoutingModule } from './../group2.routing.module';
import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Group2SearchDto, Group2ThanhLyDto } from '@shared/service-proxies/service-proxies';
import {Group2ThanhLyServiceProxy} from '@shared/service-proxies/service-proxies';
import * as moment from 'moment';

@Component({
    selector: 'app-car-sub-group2',
    templateUrl: './car-sub-group2.component.html',
    styleUrls: ['./car-sub-group2.component.css', '../../style.less']
})
export class CarSubGroup2Component extends AppComponentBase implements OnInit {

    currentUserName : string;
    xeSearch : Group2SearchDto = new Group2SearchDto();
    xeThanhLy : Group2ThanhLyDto = new Group2ThanhLyDto();

    constructor(injector: Injector, private group2ThanhLyService: Group2ThanhLyServiceProxy) {
        super(injector);
        this.currentUserName = this.appSession.user.userName;
    }

    ngOnInit() {
        this.search();
    }

    search() {
        this.group2ThanhLyService.tHANHLY_Group2Search(4)
        .subscribe((result) => {
            this.xeSearch = result;
        });
    }

    thanhLy() {
        this.message.confirm(
            this.l(''),
            this.l('Xác nhận thanh lý xe này?'),
            (isConfirmed) => {
                if (isConfirmed) {
                    this.xacNhan();
                }
            }
        );
    }

    xacNhan() {
        this.xeThanhLy.thanhLy_MaXe = this.xeSearch.ma;
        this.xeThanhLy.thanhLy_NguoiTao = this.currentUserName;
        this.xeThanhLy.thanhLy_NgayTao = moment();
        this.group2ThanhLyService.tHANHLY_Group2ThanhLy(this.xeThanhLy)
        .subscribe((result) => {
            
        });
        this.message.success(
            this.l(''),
            this.l('Thanh lý thành công!')
        );
    }

}
