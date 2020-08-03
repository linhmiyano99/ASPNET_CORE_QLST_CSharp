using Abp.Authorization;
using Abp.Configuration.Startup;
using Abp.Localization;
using GSoft.AbpZeroTemplate;

namespace Group10.AbpZeroTemplate.Application
{
    public class Group10AuthorizationProviderSuaChua : AuthorizationProvider
    {
        private readonly bool _isMultiTenancyEnabled;

        public Group10AuthorizationProviderSuaChua(bool isMultiTenancyEnabled)
        {
            _isMultiTenancyEnabled = isMultiTenancyEnabled;
        }

        public Group10AuthorizationProviderSuaChua(IMultiTenancyConfig multiTenancyConfig)
        {
            _isMultiTenancyEnabled = multiTenancyConfig.IsEnabled;
        }

        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            //COMMON PERMISSIONS (FOR BOTH OF TENANTS AND HOST)

            var pages = context.GetPermissionOrNull("Pages") ?? context.CreatePermission("Pages", L("Pages"));
            var Group10 = pages.CreateChildPermission("Pages.SuaChua", L("SuaChua"));

            var demoModels = pages.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua, L("SuaChua"));
            demoModels.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua_Add, L("Create"));
            demoModels.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua_Update, L("Edit"));
            demoModels.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua_View, L("View"));
            demoModels.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua_Delete, L("Delete"));
            demoModels.CreateChildPermission(Group10SuaChuaPermissionsConst.Pages_Administration_SuaChua_Approve, L("Approve"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, AbpZeroTemplateConsts.LocalizationSourceName);
        }
    }
}
