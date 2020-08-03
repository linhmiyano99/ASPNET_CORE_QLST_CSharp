using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group9.AbpZeroTemplate.Application.Share.Group9.Dto;
using Group9.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group9.AbpZeroTemplate.Application.Controllers
{
  [Route("api/[controller]/[action]")]
  public class Group9LoaiXeController : AbpController
  {
    private readonly IGroup9LoaiXeAppService Group9LoaiXeAppService;

    public Group9LoaiXeController(IGroup9LoaiXeAppService Group9LoaiXeAppService)
    {
      this.Group9LoaiXeAppService = Group9LoaiXeAppService;
    }


        [HttpPost]
        public IDictionary<string, object> LOAIXE_Group9Insert([FromBody]Group9LoaiXeDto input)
        {
            return Group9LoaiXeAppService.LOAIXE_Group9Insert(input);
        }
    }
}
