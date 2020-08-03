using Abp.AspNetCore.Mvc.Controllers;
using Group7.AbpZeroTemplate.Web.Core.Services.PheDuyetXe;
using Group7.AbpZeroTemplate.Web.Core.Services.PheDuyetXe.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group7.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group7PheDuyetXeController : AbpController
    {
        private readonly IGroup7PheDuyetXeAppService Group7PheDuyetXeAppService;
        public Group7PheDuyetXeController(IGroup7PheDuyetXeAppService Group7PheDuyetXeAppService)
        {
            this.Group7PheDuyetXeAppService = Group7PheDuyetXeAppService;
        }
        [HttpPost]
        public List<Group7DeXuatBangGiaDto> Group7SelectBangGia(int input)
        {
            return Group7PheDuyetXeAppService.Group7SelectBangGia(input);
        }
        [HttpPost]
        public List<Group7DeXuatDto> Group7SelectDeXuat(int input)
        {
            return Group7PheDuyetXeAppService.Group7SelectDeXuat(input);
        }
        [HttpPost]
        public IDictionary<string, object> Group7Approve(int ma,  int mabanggia, string lydo)
        {
            return Group7PheDuyetXeAppService.Group7Approve(ma,mabanggia,lydo);
        }

        [HttpPost]
        public IDictionary<string, object> Group7Reject(int ma,  string lydo)
        {
            return Group7PheDuyetXeAppService.Group7Reject(ma, lydo);
        }
        
    }
}
