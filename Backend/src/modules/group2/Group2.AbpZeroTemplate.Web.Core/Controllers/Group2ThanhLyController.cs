using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group2.AbpZeroTemplate.Application.Share.Group2.Dto;
using Group2.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Group2.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group2ThanhLyController : AbpController
    {
        private readonly IGroup2ThanhLyAppService Group2ThanhLyAppService;

        public Group2ThanhLyController(IGroup2ThanhLyAppService Group2ThanhLyAppService)
        {
            this.Group2ThanhLyAppService = Group2ThanhLyAppService;
        }
        [HttpPost]
        public Group2SearchDto THANHLY_Group2Search(int MaXe)
        {
            return Group2ThanhLyAppService.THANHLY_Group2Search(MaXe);
        }
        [HttpPost]
        public IDictionary<string, object> THANHLY_Group2ThanhLy([FromBody]Group2ThanhLyDto input)
        {
            return Group2ThanhLyAppService.THANHLY_Group2ThanhLy(input);
        }
    }
}
