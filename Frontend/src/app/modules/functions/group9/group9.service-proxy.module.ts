import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AbpHttpInterceptor } from "abp-ng2-module/dist/src/abpHttpInterceptor";
import * as ApiServiceProxies from "../../../../shared/service-proxies/service-proxies";

@NgModule({
    providers: [
        ApiServiceProxies.Group9LoaiXeServiceProxy,
        ApiServiceProxies.Group9BaoTriServiceProxy,
        ApiServiceProxies.Group9HoatDongTaiXeServiceProxy,
        ApiServiceProxies.Group4LichTrinhServiceProxy,
        ApiServiceProxies.Group4TuyenChayServiceProxy,
        ApiServiceProxies.Group2TaiXeServiceProxy,
        ApiServiceProxies.Group4LoaiXeServiceProxy,
        ApiServiceProxies.Group9HangServiceProxy,
        ApiServiceProxies.Group5XeServiceProxy,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AbpHttpInterceptor,
            multi: true,
        },
    ],
})
export class Group9ServiceProxyModule { }
