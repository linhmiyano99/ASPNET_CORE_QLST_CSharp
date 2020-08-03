using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group8.AbpZeroTemplate.Web.Core
{
  public class Group8WebCoreModule : AbpModule
  {
    public Group8WebCoreModule() { }

    public override void Initialize()
    {

    }

    public override void PreInitialize()
    {
      IocManager.RegisterAssemblyByConvention(typeof(Group8WebCoreModule).GetAssembly());
    }
  }
}
