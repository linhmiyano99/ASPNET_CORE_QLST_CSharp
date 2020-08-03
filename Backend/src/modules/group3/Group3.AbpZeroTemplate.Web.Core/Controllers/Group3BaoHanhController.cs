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
    public class Group3BaoHanhController : AbpController
    {
        private readonly IGroup3BaoHanhAppService Group3BaoHanhAppService;
        public Group3BaoHanhController(IGroup3BaoHanhAppService Group3BaoHanhAppService)
        {
            this.Group3BaoHanhAppService = Group3BaoHanhAppService;
        }
        [HttpPost]
        public IDictionary<string, object> BaoHanh_Group3Insert([FromBody] Group3BaoHanhInsertDto input)
        {
            return Group3BaoHanhAppService.BaoHanh_Group3Insert(input);
        }
        [HttpPost]
        public List<Group3BaoHanhSearchDto> BaoHanh_Group3Search([FromBody] Group3BaoHanhSearchDto input)
        {
            return Group3BaoHanhAppService.BaoHanh_Group3Search(input);
        }
    }
}
