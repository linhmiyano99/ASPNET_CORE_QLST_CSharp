using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group8.AbpZeroTemplate.Application.Share.Group8.Dto;
using Group8.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group8.AbpZeroTemplate.Application.Controllers
{
  [Route("api/[controller]/[action]")]
  public class Group8DeXuatController : AbpController
  {
    private readonly IGroup8AppService Group8DeXuatAppService;

    public Group8DeXuatController(IGroup8AppService Group8AppService)
    {
      this.Group8DeXuatAppService = Group8AppService;
    }

    [HttpGet]
    public string test()
    {
      return Group8DeXuatAppService.test();
    }
    [HttpPost]
    public IDictionary<string, object> DEXUAT_Group8Edit(Group8DeXuatDto data)
    {
        return Group8DeXuatAppService.DEXUAT_Group8Edit(data);
    }

    [HttpPost]
    public IDictionary<string, object> DEXUAT_Group8Delete(int ma)
    {
        return Group8DeXuatAppService.DEXUAT_Group8Delete(ma);
    }
  }
}
