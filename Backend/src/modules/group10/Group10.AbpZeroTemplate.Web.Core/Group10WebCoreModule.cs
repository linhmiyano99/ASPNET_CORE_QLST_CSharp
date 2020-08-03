using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group10.AbpZeroTemplate.Web.Core
{
  public class Group10WebCoreModule : AbpModule
  {
    public Group10WebCoreModule() { }

    public override void Initialize()
    {

    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group10WebCoreModule).GetAssembly());
    }
  }
}
