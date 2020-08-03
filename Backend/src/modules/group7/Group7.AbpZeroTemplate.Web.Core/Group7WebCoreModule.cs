using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group7.AbpZeroTemplate.Web.Core
{
  public class Group7WebCoreModule : AbpModule
  {
    public Group7WebCoreModule() { }

    public override void Initialize()
    {

    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group7WebCoreModule).GetAssembly());
    }
  }
}
