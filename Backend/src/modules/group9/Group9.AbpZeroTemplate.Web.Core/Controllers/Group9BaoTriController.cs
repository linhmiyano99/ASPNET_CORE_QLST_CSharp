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
    public class Group9BaoTriController : AbpController
    {
        private readonly IGroup9BaoTriAppService Group9BaoTriAppService;

        public Group9BaoTriController(IGroup9BaoTriAppService Group9BaoTriAppService)
        {
            this.Group9BaoTriAppService = Group9BaoTriAppService;
        }


        [HttpPost]
        public IDictionary<string, object> BAOTRI_Group9Insert([FromBody] Group9BaoTriDto input)
        {
            return Group9BaoTriAppService.BAOTRI_Group9Insert(input);
        }
        [HttpPost]
        public IDictionary<string, object> BAOTRI_Group9Delete(int id)
        {
            return Group9BaoTriAppService.BAOTRI_Group9Delete(id);
        }
        [HttpPost]
        public IDictionary<string, object> BAOTRI_Group9Update([FromBody] Group9BaoTriDto input)
        {
            return Group9BaoTriAppService.BAOTRI_Group9Update(input);
        }
        [HttpPost]
        public List<Group9BaoTriDto> BAOTRI_Group9Search([FromBody] Group9BaoTriDto input)
        {
            return Group9BaoTriAppService.BAOTRI_Group9Search(input);
        }
        [HttpPost]
        public Group9BaoTriDto BAOTRI_Group9ById(int id)
        {
            return Group9BaoTriAppService.BAOTRI_Group9ById(id);
        }
        [HttpPost]
        public List<Group9BaoTriDto> BAOTRI_Group9SearchAll()
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchAll();
        }

        [HttpPost]
        public IDictionary<string, object> BAOTRI_Group9App( int id, string checkerId)
        {
            return Group9BaoTriAppService.BAOTRI_Group9App(id, checkerId);
        }

        [HttpPost]
        public string GetCurrentUserName()
        {
            return Group9BaoTriAppService.GetCurrentUserName();
        }
        [HttpPost]
        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalPropose(string maNguoiTao)
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchPersonalPropose(maNguoiTao);

        }
        [HttpPost]

        public List<Group9BaoTriDto> BAOTRI_Group9SearchAllPersonal(string maNguoiTao)
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchAllPersonal(maNguoiTao);

        }
        [HttpPost]
        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalApproved(string maNguoiTao)
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchPersonalApproved(maNguoiTao);

        }
        [HttpPost]
        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalDone(string maNguoiTao)
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchPersonalDone(maNguoiTao);

        }
        [HttpPost]
        public List<Group9XeDto> BAOTRI_Group9ShouldMaintain()
        {
            return Group9BaoTriAppService.BAOTRI_Group9ShouldMaintain();

        }

        [HttpPost]
        public async Task BAOTRI_Group9SendNotification(string ma, string maThongBao, int maXe, DateTime ngayBaoTri, int loai = 0)
        {
            await Group9BaoTriAppService.BAOTRI_Group9SendNotification(ma, maThongBao, maXe, ngayBaoTri, loai);
        }

        [HttpPost]
        public List<Group9XeDto> BAOTRI_Group9UrgentMaintain()
        {
            return Group9BaoTriAppService.BAOTRI_Group9UrgentMaintain();
        }

        [HttpPost]
        public List<Group9XeDto> BAOTRI_Group9MaintainAll()
        {
             return Group9BaoTriAppService.BAOTRI_Group9MaintainAll();

        }
        [HttpPost]
        public List<Group9XeDto> BAOTRI_Group9SearchXeStateNoMaintain()
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchXeStateNoMaintain();

        }

        [HttpPost]
        public List<Group9XeDto> BAOTRI_Group9SearchXeInMaintain()
        {
            return Group9BaoTriAppService.BAOTRI_Group9SearchXeInMaintain();

        }
    }
}
