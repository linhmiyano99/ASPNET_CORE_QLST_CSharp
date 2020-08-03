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
    public class Group3BangGiaController : AbpController
    {
        private readonly IGroup3BangGiaAppService Group3BangGiaAppService;
        public Group3BangGiaController(IGroup3BangGiaAppService Group3BangGiaAppService)
        {
            this.Group3BangGiaAppService = Group3BangGiaAppService;
        }
        [HttpPost]
        public IDictionary<string, object> BangGia_Group3Insert([FromBody] Group3BangGiaDto input)
        {
            return Group3BangGiaAppService.BangGia_Group3Insert(input);   
        }
    }
}
