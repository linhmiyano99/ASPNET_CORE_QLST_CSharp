using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group1.AbpZeroTemplate.Application.Share.Group1.Dto;
using Group1.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Group1.AbpZeroTemplate.Web.Core.Services.EditTienBaoHanh.Dto;

namespace Group1.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group1EditBHController : AbpController
    {
        private readonly IGroup1EditBHAppService group1AppService;

        public Group1EditBHController(IGroup1EditBHAppService group1AppService)
        {
            this.group1AppService = group1AppService;
        }

        [HttpPost]
        public IDictionary<string, object> BAOHANH_Group1Edit([FromBody] Group1TienBaoHanhDto input)
        {
            return group1AppService.BAOHANH_Group1Edit(input);
        }
        [HttpPost]
        public IDictionary<string, object> BAOHANH_Group1Del(int ma)
        {
            return group1AppService.BAOHANH_Group1Del(ma);
        }

    }

}
