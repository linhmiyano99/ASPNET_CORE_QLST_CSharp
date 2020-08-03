using Abp.AspNetCore.Mvc.Controllers;
using Group4.AbpZeroTemplate.Web.Core.Services.DeXuat;
using Group4.AbpZeroTemplate.Web.Core.Services.DeXuat.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group4DeXuatController : AbpController
    {
        private readonly IGroup4DeXuatAppService group4DeXuatAppService;
        public Group4DeXuatController(Group4DeXuatAppService group4DeXuatAppService)
        {
            this.group4DeXuatAppService = group4DeXuatAppService;
        }
        [HttpPost]
        public List<Group4DeXuatDto> DEXUAT_Group4Search([FromBody] Group4DeXuatDto input)
        {
            return group4DeXuatAppService.DEXUAT_Group4Search(input);
        }
    }
}
