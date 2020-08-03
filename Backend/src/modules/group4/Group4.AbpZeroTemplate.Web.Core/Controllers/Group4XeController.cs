using Abp.AspNetCore.Mvc.Controllers;
using Group4.AbpZeroTemplate.Web.Core.Services.Xe;
using Group4.AbpZeroTemplate.Web.Core.Services.Xe.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group4XeController : AbpController
    {
        private readonly IGroup4XeAppService group4XeAppService;
        public Group4XeController(IGroup4XeAppService group4XeAppService)
        {
            this.group4XeAppService = group4XeAppService;
        }

        [HttpPost]
        public List<Group4XeDto>XE_Group4Search([FromBody]Group4XeDto input)
        {
            return group4XeAppService.XE_Group4Search(input);
        }
    }
}
