import { PermissionCheckerService } from "@abp/auth/permission-checker.service";
import { Injectable } from "@angular/core";
import { AppMenu } from "./app-menu";
import { AppMenuItem } from "./app-menu-item";

@Injectable()
export class AppNavigationService {
  constructor(private _permissionService: PermissionCheckerService) { }

  getMenu(): AppMenu {
    return new AppMenu("MainMenu", "MainMenu", [
      // new AppMenuItem('Dashboard', 'Pages.Administration.Host.Dashboard', 'flaticon-line-graph', '/app/admin/hostDashboard'),
      // new AppMenuItem('Dashboard', 'Pages.Tenant.Dashboard', 'flaticon-line-graph', '/app/main/dashboard'),
      // new AppMenuItem('Tenants', 'Pages.Tenants', 'flaticon-list-3', '/app/admin/tenants'),
      // new AppMenuItem('Editions', 'Pages.Editions', 'flaticon-app', '/app/admin/editions'),
      // new AppMenuItem('Administration', '', 'flaticon-interface-8', '', [
      // new AppMenuItem('MenuClient', 'Pages.Administration.MenuClient', 'flaticon-menu-1', '/app/gwebsite/menu-client'),
      // new AppMenuItem('DemoModel', 'Pages.Administration.DemoModel', 'flaticon-menu-1', '/app/gwebsite/demo-model'),
      // new AppMenuItem(
      //     "Quản lý xe",
      //     "Pages.Group0.Car",
      //     "flaticon-car",
      //     "/app/admin/car"
      // ),
      // new AppMenuItem(
      //     "Quản lý loại xe",
      //     "Pages.Group0.Car",
      //     "flaticon-transport",
      //     "/app/admin/model-car"
      // ),
      // new AppMenuItem(
      //     "Quản lý đề xuất xe",
      //     "Pages.Group0.Car",
      //     "flaticon-plus",
      //     "/app/admin/dx-cars"
      // ),
      // ]),
      // new AppMenuItem('Systems', '', 'flaticon-layers', '', [
      //     new AppMenuItem('OrganizationUnits', 'Pages.Administration.OrganizationUnits', 'flaticon-map', '/app/admin/organization-units'),
      //     new AppMenuItem('Roles', 'Pages.Administration.Roles', 'flaticon-suitcase', '/app/admin/roles'),
      //     new AppMenuItem('Users', 'Pages.Administration.Users', 'flaticon-users', '/app/admin/users'),
      //     new AppMenuItem('Languages', 'Pages.Administration.Languages', 'flaticon-tabs', '/app/admin/languages'),
      //     new AppMenuItem('AuditLogs', 'Pages.Administration.AuditLogs', 'flaticon-folder-1', '/app/admin/auditLogs'),
      //     new AppMenuItem('Maintenance', 'Pages.Administration.Host.Maintenance', 'flaticon-lock', '/app/admin/maintenance'),
      //     new AppMenuItem('Subscription', 'Pages.Administration.Tenant.SubscriptionManagement', 'flaticon-refresh', '/app/admin/subscription-management'),
      //     new AppMenuItem('VisualSettings', 'Pages.Administration.UiCustomization', 'flaticon-medical', '/app/admin/ui-customization'),
      //     new AppMenuItem('Settings', 'Pages.Administration.Host.Settings', 'flaticon-settings', '/app/admin/hostSettings'),
      //     new AppMenuItem('Settings', 'Pages.Administration.Tenant.Settings', 'flaticon-settings', '/app/admin/tenantSettings')
      // ]),
      // new AppMenuItem('DemoUiComponents', 'Pages.DemoUiComponents', 'flaticon-shapes', '/app/admin/demo-ui-components')

      new AppMenuItem(
        "Biểu đồ",
        "Pages.Administration.Host.Dashboard",
        "flaticon-line-graph",
        "/app/admin/hostDashboard"
      ),
      new AppMenuItem(
        "Thống kê xuất sử dụng",
        "Pages.Administration.Host.Dashboard",
        "flaticon-graphic-1",
        "/app/admin/usage-car"
      ),
      new AppMenuItem(
        "Quản lý xe",
        "Pages.Group0.Car",
        "flaticon-car",
        "/app/admin/car"
      ),
      new AppMenuItem(
        "Quản lý loại xe",
        "Pages.Group0.Car",
        "flaticon-transport",
        "/app/admin/model-car"
      ),
      new AppMenuItem(
        "Quản lý hãng xe",
        "Pages.Group9.Hang",
        "flaticon-users",
        "/app/admin/manufacturer-car"
      ),
      new AppMenuItem(
        "Quản lý đề xuất xe",
        "Pages.Group0.Car",
        "flaticon-plus",
        "/app/admin/dx-cars"
      ),
      new AppMenuItem(
        "Quản lý tài xế",
        "Pages.Group0.Car",
        "flaticon-truck",
        "/app/admin/driver"
      ),
      new AppMenuItem(
        "Quản lý lịch trình",
        "Pages.Group0.Car",
        "flaticon-route",
        "/app/admin/schedule-cars"
      ),
      new AppMenuItem(
        "Quản lý tuyến chạy",
        "Pages.Group0.Car",
        "flaticon-map-location",
        "/app/admin/road"
      ),
      new AppMenuItem(
        "Thông báo bảo trì xe",
        "Pages.Group0.Car",
        "flaticon-plus",
        "/app/admin/maintain-cars-notify"
      ),
      new AppMenuItem(
        "Quản lý hoạt động tài xế",
        "Pages.Group0.Car",
        'flaticon-line-graph',
        "/app/admin/driver-schedule"
      ),
      new AppMenuItem(
        "Yêu cầu sửa chữa xe cộ",
        "Pages.Group0.Car",
        "flaticon-list-2",
        "/app/admin/maintain-cars"
      ),
      new AppMenuItem(
        "Quản lý tiền bảo trì",
        "Pages.Group0.Car",
        "flaticon-graphic-1",
        "/app/admin/maintenance-price"
      ),

      new AppMenuItem(
        "Quản lý bảo hiểm",
        "Pages.Group0.Car",
        "flaticon-suitcase",
        "/app/admin/insurance"
      ),
      new AppMenuItem(
        "Quản lý sửa chữa",
        "Pages.Group0.Car",
        "flaticon-settings",
        "/app/admin/repair-car"
      ),
      new AppMenuItem(
        "Quản lý đề xuất thuê xe",
        "Pages.Group0.Car",
        "flaticon-lifebuoy",
        "/app/admin/suggest-rent-car"
      ),
      new AppMenuItem(
        "Quản lý đơn vị thuê",
        "Pages.Group0.Car",
        "flaticon-clipboard",
        "/app/admin/rent"
      ),
      new AppMenuItem(
        "Phí kiểm định và phí đường bộ",
        "Pages.Group0.Car",
        "flaticon-piggy-bank",
        "/app/admin/accreditation-road-price"
      ),
      new AppMenuItem(
        "Thông báo phí đường bộ",
        "Pages.Group0.Car",
        "flaticon-alert-2",
        "/app/admin/road-price"
      ),
      new AppMenuItem(
        "Roles",
        "Pages.Administration.Roles",
        "flaticon-suitcase",
        "/app/admin/roles"
      ),
      new AppMenuItem(
        "Users",
        "Pages.Administration.Users",
        "flaticon-users",
        "/app/admin/users"
        
      ),
      
    ]);
  }

  checkChildMenuItemPermission(menuItem): boolean {
    for (let i = 0; i < menuItem.items.length; i++) {
      let subMenuItem = menuItem.items[i];

      if (
        subMenuItem.permissionName &&
        this._permissionService.isGranted(subMenuItem.permissionName)
      ) {
        return true;
      }

      if (subMenuItem.items && subMenuItem.items.length) {
        return this.checkChildMenuItemPermission(subMenuItem);
      } else if (!subMenuItem.permissionName) {
        return true;
      }
    }

    return false;
  }
}
