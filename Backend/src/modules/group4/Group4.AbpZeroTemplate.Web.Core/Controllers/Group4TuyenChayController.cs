using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group4.AbpZeroTemplate.Application.Share.Group4.Dto;
using Group4.AbpZeroTemplate.Web.Core.Cars;
using Group4.AbpZeroTemplate.Web.Core.Services.TuyenChay;
using Group4.AbpZeroTemplate.Web.Core.Services.TuyenChay.Dto;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group4TuyenChayController: AbpController
    {
        private readonly IGroup4TuyenChayAppService group4TuyenChayAppService;

        public Group4TuyenChayController(IGroup4TuyenChayAppService group4TuyenChayAppService)
        {
            this.group4TuyenChayAppService = group4TuyenChayAppService;
        }

        [HttpPost]
        public IDictionary<string, object> TUYENCHAY_Group4Insert([FromBody]Group4TuyenChayDto input)
        {
            return group4TuyenChayAppService.TUYENCHAY_Group4Insert(input);
        }

        [HttpPost]
        public List<Group4TuyenChayDto> TUYENCHAY_Group4Search([FromBody]Group4TuyenChayDto input)
        {
            return group4TuyenChayAppService.TUYENCHAY_Group4Search(input);
        }
    }
}
