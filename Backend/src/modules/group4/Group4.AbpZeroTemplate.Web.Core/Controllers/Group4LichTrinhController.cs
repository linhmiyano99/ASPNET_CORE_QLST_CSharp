using Abp.AspNetCore.Mvc.Controllers;
using Group4.AbpZeroTemplate.Web.Core.Services.LichTrinh;
using Group4.AbpZeroTemplate.Web.Core.Services.LichTrinh.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Application
{
    [Route("api/[controller]/[action]")]
    public class Group4LichTrinhController : AbpController
    {
        private readonly IGroup4LichTrinhAppService group4LichTrinhAppService;
        public Group4LichTrinhController(Group4LichTrinhAppService group4LichTrinhAppService)
        {
            this.group4LichTrinhAppService = group4LichTrinhAppService;
        }

        [HttpPost]
        public IDictionary<string, object>LICHTRINH_Group4Insert([FromBody]Group4LichTrinhDto input)
        {
            return group4LichTrinhAppService.LICHTRINH_Group4Insert(input);
        }

        [HttpPost]
        public List<Group4LichTrinhDto> LICHTRINH_Group4Search([FromBody]Group4LichTrinhDto input)
        {
            return group4LichTrinhAppService.LICHTRINH_Group4Search(input);
        }
        [HttpPost]
        public Group4LichTrinhDto LICTRINH_Group4SearchById(int ma)
        {
            return group4LichTrinhAppService.LICTRINH_Group4SearchById(ma);
        }
        [HttpPost]
        public IDictionary<string, object> LICHTRINH_Group4DeleteById(int ma)
        {
            return group4LichTrinhAppService.LICHTRINH_Group4DeleteById(ma);
        }
        [HttpPost]
        public IDictionary<string, object> LICHTRINH_Group4Update([FromBody]Group4LichTrinhDto input)
        {
            return group4LichTrinhAppService.LICHTRINH_Group4Update(input);
        }
    }
}
