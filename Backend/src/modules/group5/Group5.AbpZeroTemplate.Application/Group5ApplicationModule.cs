using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group5.AbpZeroTemplate.Application
{
  public class Group5ApplicationModule : AbpModule
  {
    public Group5ApplicationModule() { }

    public override void Initialize()
    {
      Configuration.Authorization.Providers.Add<Group5AuthorizationProvider>();
    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group5ApplicationModule).GetAssembly());
    }
  }
}
