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
    public class Group9HoatDongTaiXeController : AbpController
    {
        private readonly IGroup9HoatDongTaiXeAppService Group9HoatDongTaiXeAppService;

        public Group9HoatDongTaiXeController(IGroup9HoatDongTaiXeAppService Group9HoatDongTaiXeAppService)
        {
            this.Group9HoatDongTaiXeAppService = Group9HoatDongTaiXeAppService;
        }


        [HttpPost]
        public IDictionary<string, object> HOATDONGTAIXE_Group9Insert([FromBody] Group9HoatDongTaiXeDto input)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9Insert(input);
        }
        [HttpPost]
        public IDictionary<string, object> HOATDONGTAIXE_Group9Delete(int id)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9Delete(id);
        }
        [HttpPost]
        public IDictionary<string, object> HOATDONGTAIXE_Group9Update([FromBody] Group9HoatDongTaiXeDto input)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9Update(input);
        }
        [HttpPost]
        public List<Group9HoatDongTaiXeDto> HOATDONGTAIXE_Group9Search([FromBody] Group9HoatDongTaiXeDto input)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9Search(input);
        }
        [HttpPost]
        public Group9HoatDongTaiXeDto HOATDONGTAIXE_Group9ById(int id)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9ById(id);
        }
        [HttpPost]

        public List<Group9HoatDongTaiXeDto> HOATDONGTAIXE_Group9SearchAll()
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchAll();
        }


        [HttpPost]
        public List<Group9LichTrinhDto> HOATDONGTAIXE_Group9SearchAllLichTrinh()
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchAllLichTrinh();
        }

        [HttpPost]
        public List<Group9LichTrinhDto> HOATDONGTAIXE_Group9SearchAllNewLichTrinh()
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchAllNewLichTrinh();
        }
        [HttpPost]
        public IDictionary<string, object> HOATDONGTAIXE_Group9App(int id, string checkerId)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9App(id, checkerId);
        }

        [HttpPost]
        public Group9LichTrinhDto HOATDONGTAIXE_Group9SearchByIdLichTrinh(int id)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchByIdLichTrinh(id);

        }
        [HttpPost]
        public List<Group9LichTrinhDto> HOATDONGTAIXE_Group9SearchLichTrinh([FromBody] Group9LichTrinhDto input)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchLichTrinh(input);

        }
        [HttpPost]
        public List<Group9TaiXeDto> HOATDONGTAIXE_Group9SearchAllTaiXe()
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9SearchAllTaiXe();
        }

        [HttpPost]
        public List<Group9HoatDongTaiXeDto> HOATDONGTAIXE_Group9Tracking(int? maTaiXe, int? maLichTrinh, DateTime? tuNgay, DateTime? denNgay)
        {
            return Group9HoatDongTaiXeAppService.HOATDONGTAIXE_Group9Tracking(maTaiXe, maLichTrinh, tuNgay, denNgay);

        }
    }

}
