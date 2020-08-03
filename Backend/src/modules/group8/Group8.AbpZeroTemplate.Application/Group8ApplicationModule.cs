using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group8.AbpZeroTemplate.Application
{
  public class Group8ApplicationModule : AbpModule
  {
    public Group8ApplicationModule() { }

    public override void Initialize()
    {
      Configuration.Authorization.Providers.Add<Group8AuthorizationProvider>();
    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group8ApplicationModule).GetAssembly());
    }
  }
}
