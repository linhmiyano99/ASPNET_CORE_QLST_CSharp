using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Group5.AbpZeroTemplate.Application.Share.Group5.Dto;
using Group5.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group5.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group5XeController : AbpController
    {
        private readonly IGroup5XeAppService group5XeAppService;

        public Group5XeController(IGroup5XeAppService Group5AppService)
        {
            this.group5XeAppService = Group5AppService;
        }

        [HttpGet]
        public string test()
        {
            return group5XeAppService.test();
        }

        [HttpPost]
        public List<Group5DeXuatDto> DEXUAT_Group5DisplaySuggestions()
        {
            return group5XeAppService.DEXUAT_Group5DisplaySuggestions();
        }

        [HttpPost]
        public List<Group5XeDto> Xe_Group5DisplayVehicles()
        {
            return group5XeAppService.Xe_Group5DisplayVehicles();
        }

        [HttpPost]
        public List<Group5XeDto> XE_Group5SearchByNumberPlate(string numberPlate)
        {
            return group5XeAppService.XE_Group5SearchByNumberPlate(numberPlate);
        }

        [HttpPost]
        public Group5XeDto XE_Group5SearchById(int id)
        {
            return group5XeAppService.XE_Group5SearchById(id);
        }

        [HttpPost]
        public List<Group5XeDto> XE_Group5SearchByType(string loaiXe)
        {
            return group5XeAppService.XE_Group5SearchByType(loaiXe);
        }

        [HttpPost]
        public List<Group5XeDto> XE_Group5SearchByBrandAndType([FromBody]Group5XeDto input)
        {
            return group5XeAppService.XE_Group5SearchByBrandAndType(input);
        }
    }
}
