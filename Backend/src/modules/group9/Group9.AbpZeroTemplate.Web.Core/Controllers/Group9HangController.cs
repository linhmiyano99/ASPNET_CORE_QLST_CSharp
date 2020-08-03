using Abp.AspNetCore.Mvc.Controllers;
using Abp.Dependency;
using Abp.Notifications;
using Group9.AbpZeroTemplate.Application.Share.Group9.Dto;
using Group9.AbpZeroTemplate.Web.Core.Cars;
using GSoft.AbpZeroTemplate.Sessions.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group9.AbpZeroTemplate.Application.Controllers
{
    [Route("api/[controller]/[action]")]
    public class Group9HangController : AbpController
    {
        private readonly IGroup9HangAppService Group9HangAppService;

        public Group9HangController(IGroup9HangAppService Group9HangAppService)
        {
            this.Group9HangAppService = Group9HangAppService;
        }


        [HttpPost]
        public IDictionary<string, object> Hang_Group9Insert([FromBody] Group9HangDto input)
        {
            return Group9HangAppService.Hang_Group9Insert(input);
        }
        [HttpPost]
        public IDictionary<string, object> Hang_Group9Delete(int id)
        {
            return Group9HangAppService.Hang_Group9Delete(id);
        }
        [HttpPost]
        public IDictionary<string, object> Hang_Group9Update([FromBody] Group9HangDto input)
        {
            return Group9HangAppService.Hang_Group9Update(input);
        }
        [HttpPost]
        public List<Group9HangDto> Hang_Group9Search([FromBody] Group9HangDto input)
        {
            return Group9HangAppService.Hang_Group9Search(input);
        }
        [HttpPost]
        public Group9HangDto Hang_Group9ById(int id)
        {
            return Group9HangAppService.Hang_Group9ById(id);
        }
        [HttpPost]

        public List<Group9HangDto> Hang_Group9SearchAll()
        {
            return Group9HangAppService.Hang_Group9SearchAll();
        }

    }
}
