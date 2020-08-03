using Abp.Authorization;
using Abp.Configuration.Startup;
using Abp.Localization;
using GSoft.AbpZeroTemplate;

namespace Group4.AbpZeroTemplate.Application
{
  public class Group4AuthorizationProvider : AuthorizationProvider
  {
    private readonly bool _isMultiTenancyEnabled;

    public Group4AuthorizationProvider(bool isMultiTenancyEnabled)
    {
      _isMultiTenancyEnabled = isMultiTenancyEnabled;
    }

    public Group4AuthorizationProvider(IMultiTenancyConfig multiTenancyConfig)
    {
      _isMultiTenancyEnabled = multiTenancyConfig.IsEnabled;
    }

    public override void SetPermissions(IPermissionDefinitionContext context)
    {
      //COMMON PERMISSIONS (FOR BOTH OF TENANTS AND HOST)

    var pages = context.GetPermissionOrNull("Pages") ?? context.CreatePermission("Pages", L("Pages"));

    var group4LoaiXe = pages.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LoaiXe, L("Group4LoaiXe"));
    group4LoaiXe.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LoaiXe_Search, L("Xem"));
    group4LoaiXe.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LoaiXe_Delete, L("Xóa"));

    var group4TuyenChay = pages.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4TuyenChay, L("Group4TuyenChay"));
    group4TuyenChay.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4TuyenChay_Insert, L("Thêm"));
    group4TuyenChay.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4TuyenChay_Search, L("Xem"));


    var group4LichTrinh = pages.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh, L("Group4LichTrinh"));
    group4LichTrinh.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh_Insert, L("Thêm"));
    group4LichTrinh.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh_Search, L("Xem"));
    group4LichTrinh.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh_SearchById, L("Xem chi tiết"));
    group4LichTrinh.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh_Delete, L("Xóa"));
    group4LichTrinh.CreateChildPermission(Group4PermissionsConst.Pages_Administration_Group4LichTrinh_Update, L("Cập nhật"));





        }

        private static ILocalizableString L(string name)
    {
      return new LocalizableString(name, AbpZeroTemplateConsts.LocalizationSourceName);
    }
  }
}
