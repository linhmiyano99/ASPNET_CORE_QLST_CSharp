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
  public class Group4LoaiXeController : AbpController
  {
    private readonly IGroup4LoaiXeAppService group4LoaiXeAppService;

    public Group4LoaiXeController(IGroup4LoaiXeAppService group4LoaiXeAppService)
    {
      this.group4LoaiXeAppService = group4LoaiXeAppService;
    }
    
    [HttpGet]
    public string test()
    {
        return group4LoaiXeAppService.test();
    }

    [HttpPost]
    public List<Group4LoaiXeDto> LOAIXE_Group4Search([FromBody]Group4LoaiXeDto input)
    {
        return group4LoaiXeAppService.LOAIXE_Group4Search(input);
    }

    [HttpPost]
    public Group4LoaiXeDto LOAIXE_Group4SearchById(int input)
    {
        return group4LoaiXeAppService.LOAIXE_Group4SearchById(input);
    }
    
    [HttpPost]
    public IDictionary<string, object> LOAIXE_Group4Delete(int ma)
    {
        return group4LoaiXeAppService.LOAIXE_Group4Delete(ma);
    }
  }
}
