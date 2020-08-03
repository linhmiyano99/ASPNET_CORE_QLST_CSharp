using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Group0.AbpZeroTemplate.Application;
using Group1.AbpZeroTemplate.Application;
using Group2.AbpZeroTemplate.Application;
using Group3.AbpZeroTemplate.Application;
using Group4.AbpZeroTemplate.Application;
using Group5.AbpZeroTemplate.Application;
using Group6.AbpZeroTemplate.Application;
using Group7.AbpZeroTemplate.Application;
using Group8.AbpZeroTemplate.Application;
using Group9.AbpZeroTemplate.Application;
using Group10.AbpZeroTemplate.Application;
using GSoft.AbpZeroTemplate.Authorization;
using GWebsite.AbpZeroTemplate.Application;

namespace GSoft.AbpZeroTemplate
{
    /// <summary>
    /// Application layer module of the application.
    /// </summary>
    [DependsOn(
        typeof(AbpZeroTemplateCoreModule),
        typeof(GWebsiteApplicationModule),
        typeof(Group0ApplicationModule),
        typeof(Group1ApplicationModule),
        typeof(Group2ApplicationModule),
        typeof(Group3ApplicationModule),
        typeof(Group4ApplicationModule),
        typeof(Group5ApplicationModule),
        typeof(Group6ApplicationModule),
        typeof(Group7ApplicationModule),
        typeof(Group8ApplicationModule),
        typeof(Group9ApplicationModule),
        typeof(Group10ApplicationModule)
        )]
    public class AbpZeroTemplateApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            //Adding authorization providers
            Configuration.Authorization.Providers.Add<AppAuthorizationProvider>();

            //Adding custom AutoMapper configuration
            Configuration.Modules.AbpAutoMapper().Configurators.Add(CustomDtoMapper.CreateMappings);
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(AbpZeroTemplateApplicationModule).GetAssembly());
        }
    }
}