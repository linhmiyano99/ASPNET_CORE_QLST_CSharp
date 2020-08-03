using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group10.AbpZeroTemplate.Application.Share.Group10.Dto;
using Group10.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group10.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group10SuaChuaController : AbpController
    {
        private readonly IGroup10SuaChuaAppService Group10AppService;

        public Group10SuaChuaController(IGroup10SuaChuaAppService Group10AppService)
        {
            this.Group10AppService = Group10AppService;
        }

        [HttpPost]
        public IDictionary<string, object> SuaChua_Group10Insert([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Insert(input);
        }
        [HttpPost]
        public IDictionary<string, object> SuaChua_Group10Update([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Update(input);
        }
        [HttpPost]
        public IDictionary<string, object> SuaChua_Group10Delete([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Delete(input);
        }
        [HttpPost]
        public IDictionary<string, object> SuaChua_Group10Approve([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Approve(input);
        }
        [HttpPost]
        public IDictionary<string, object> SuaChua_Group10Refuse([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Refuse(input);
        }
        [HttpPost]
        public List<Group10SuaChuaDto> SuaChua_Group10Search([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10Search(input);
        }
        [HttpPost]
        public Group10SuaChuaDto SuaChua_Group10SearchById([FromBody]Group10SuaChuaDto input)
        {
            return Group10AppService.SuaChua_Group10SearchById(input);
        }
        [HttpPost]
        public List<Group10XeDto> Xe_Group10GetAllXeCoBienSo()
        {
            return Group10AppService.Xe_Group10GetAllXeCoBienSo();
        }
        [HttpPost]
        public Group10TaiXeDto TaiXe_Group10GetTaiXeByUsername([FromBody]Group10TaiXeDto input)
        {
            return Group10AppService.TaiXe_Group10GetTaiXeByUsername(input);
        }
    }
}
