using Abp.Authorization;
using Abp.Configuration.Startup;
using Abp.Localization;
using GSoft.AbpZeroTemplate;

namespace Group8.AbpZeroTemplate.Application
{
  public class Group8AuthorizationProvider : AuthorizationProvider
  {
    private readonly bool _isMultiTenancyEnabled;

    public Group8AuthorizationProvider(bool isMultiTenancyEnabled)
    {
      _isMultiTenancyEnabled = isMultiTenancyEnabled;
    }

    public Group8AuthorizationProvider(IMultiTenancyConfig multiTenancyConfig)
    {
      _isMultiTenancyEnabled = multiTenancyConfig.IsEnabled;
    }

    public override void SetPermissions(IPermissionDefinitionContext context)
    {
      //COMMON PERMISSIONS (FOR BOTH OF TENANTS AND HOST)

      var pages = context.GetPermissionOrNull("Pages") ?? context.CreatePermission("Pages", L("Pages"));
      var Group8 = pages.CreateChildPermission("Pages.Group8", L("Group8"));


      var demoModels = pages.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car, L("Car"));
      demoModels.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car_Add, L("Create"));
      demoModels.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car_Update, L("Edit"));
      demoModels.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car_View, L("View"));
      demoModels.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car_Delete, L("Delete"));
      demoModels.CreateChildPermission(Group8PermissionsConst.Pages_Administration_Car_Approve, L("Approve"));
    }

    private static ILocalizableString L(string name)
    {
      return new LocalizableString(name, AbpZeroTemplateConsts.LocalizationSourceName);
    }
  }
}
