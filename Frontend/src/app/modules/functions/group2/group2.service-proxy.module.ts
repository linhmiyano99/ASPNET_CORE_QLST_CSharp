import { NgModule } from "@angular/core";
import * as ApiServiceProxies from '../../../../shared/service-proxies/service-proxies'
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AbpHttpInterceptor } from "abp-ng2-module/dist/src/abpHttpInterceptor";

@NgModule({
    providers: [
        ApiServiceProxies.Group2ThanhLyServiceProxy, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AbpHttpInterceptor,
            multi : true
        },

    ]
})

export class Group2ServiceProxyModule {}