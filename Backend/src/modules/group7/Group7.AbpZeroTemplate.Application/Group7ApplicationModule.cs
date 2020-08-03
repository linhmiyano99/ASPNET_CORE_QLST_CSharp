using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group7.AbpZeroTemplate.Application
{
  public class Group7ApplicationModule : AbpModule
  {
    public Group7ApplicationModule() { }

    public override void Initialize()
    {
      Configuration.Authorization.Providers.Add<Group7AuthorizationProvider>();
    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group7ApplicationModule).GetAssembly());
    }
  }
}
