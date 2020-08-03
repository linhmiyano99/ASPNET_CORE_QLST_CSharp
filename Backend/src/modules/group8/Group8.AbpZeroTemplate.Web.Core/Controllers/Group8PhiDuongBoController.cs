using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group8.AbpZeroTemplate.Application.Share.Group8.Dto;
using Group8.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group8.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group8PhiDuongBoController : AbpController
    {
        private readonly IGroup8PhiDuongBoAppService group8PhiDuongBoAppService;

        public Group8PhiDuongBoController(IGroup8PhiDuongBoAppService Group8PhiDuongBoAppService)
        {
            this.group8PhiDuongBoAppService = Group8PhiDuongBoAppService;
        }

        [HttpPost]
        public IDictionary<string, object> PhiDuongBo_Group8Edit(Group8PhiDuongBo data)
        {
            return group8PhiDuongBoAppService.PhiDuongBo_Group8Edit(data);
        }
        [HttpPost]
        public IDictionary<string, object> PhiDuongBo_Group8Insert(Group8PhiDuongBo data)
        {
            return group8PhiDuongBoAppService.PhiDuongBo_Group8Insert(data);
        }

        [HttpPost]
        public IDictionary<string, object> PhiDuongBo_Group8Delete(int ma)
        {
            return group8PhiDuongBoAppService.PhiDuongBo_Group8Delete(ma);
        }
    }
}
