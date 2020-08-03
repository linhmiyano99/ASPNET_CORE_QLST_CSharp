import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module/dist/src/abpHttpInterceptor';
import * as  ApiServiceProxies from '../../../../shared/service-proxies/service-proxies';

@NgModule ({
  providers: [
    ApiServiceProxies.Group3DeXuatServiceProxy,
    ApiServiceProxies.Group3BangGiaServiceProxy,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AbpHttpInterceptor,
      multi: true,
    },
  ],
})
export class Group3ServiceProxyModule {}
