using Abp.AspNetCore.Mvc.Controllers;
using Group4.AbpZeroTemplate.Web.Core.Services.BangGia;
using Group4.AbpZeroTemplate.Web.Core.Services.BangGia.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group4BangGiaController : AbpController
    {
        private readonly IGroup4BangGiaAppService group4BangGiaAppService;
        public Group4BangGiaController(Group4BangGiaAppService group4BangGiaAppService)
        {
            this.group4BangGiaAppService = group4BangGiaAppService;
        }
        [HttpPost]
        public List<Group4BangGiaDto> BangGia_Group4Search([FromBody] Group4BangGiaDto input)
        {
            return group4BangGiaAppService.BANGIA_Group4Search(input);
        }
    }
}
