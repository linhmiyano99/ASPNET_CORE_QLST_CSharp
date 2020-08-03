using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group3.AbpZeroTemplate.Application.Share.Group3.Dto;
using Group3.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group3.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group3DeXuatController : AbpController
    {
        private readonly IGroup3DeXuatAppService Group3DeXuatAppService;

        public Group3DeXuatController(IGroup3DeXuatAppService Group3DeXuatAppService)
        {
            this.Group3DeXuatAppService = Group3DeXuatAppService;
        }
    
        [HttpPost]
        public IDictionary<string, object> DeXuat_Group3Insert([FromBody]Group3DeXuatDto input)
        {
        return Group3DeXuatAppService.DeXuat_Group3Insert(input);
        }
    }
}
