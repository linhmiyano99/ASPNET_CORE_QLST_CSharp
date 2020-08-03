using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group10.AbpZeroTemplate.Application.Share.Group10.Dto;
using Group10.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group10.AbpZeroTemplate.Application.Controllers
{
  [Route("api/[controller]/[action]")]
  public class Group10Controller : AbpController
  {
    private readonly IGroup10AppService Group10AppService;

    public Group10Controller(IGroup10AppService Group10AppService)
    {
      this.Group10AppService = Group10AppService;
    }

        [HttpPost]
        public IDictionary<string, object> Group10_Xe_Insert([FromBody]Group10XeDto input)
        {
            return Group10AppService.Group10_Xe_Insert(input);
        }
    }
}
