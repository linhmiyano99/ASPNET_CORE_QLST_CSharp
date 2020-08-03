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

namespace Group1.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group1EditLXController : AbpController
    {
        private readonly IGroup1EditLXAppService group1AppService;

        public Group1EditLXController(IGroup1EditLXAppService group1AppService)
        {
            this.group1AppService = group1AppService;
        }

        [HttpPost]
        public IDictionary<string, object> LOAIXE_Group1Edit([FromBody] Group1LoaiXeDto input)
        {
            return group1AppService.LOAIXE_Group1Edit(input);
        }

    }
}