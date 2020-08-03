using Abp.Application.Services;
using Group7.AbpZeroTemplate.Web.Core.Services.PheDuyetXe.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group7.AbpZeroTemplate.Web.Core.Services.PheDuyetXe
{
    public interface IGroup7PheDuyetXeAppService : IApplicationService
    {

        List<Group7DeXuatBangGiaDto> Group7SelectBangGia(int input);
        List<Group7DeXuatDto> Group7SelectDeXuat(int input);
        IDictionary<string, object> Group7Approve(int ma,  int mabanggia, string lydo);
        IDictionary<string, object> Group7Reject(int ma,  string lydo);
    }
    public class Group7PheDuyetXeAppService : BaseService, IGroup7PheDuyetXeAppService
    {
        public IDictionary<string, object> Group7Approve(int ma,  int mabanggia, string lydo)
        {
            return procedureHelper.GetData<dynamic>("DeXuat_Group7Approve", new
            {
                Ma = ma,                
                DeXuat_MaBangGia = mabanggia,                
                DeXuat_LyDo = lydo
            }).FirstOrDefault();
        }
        public IDictionary<string, object> Group7Reject(int ma,  string lydo)
        {
            return procedureHelper.GetData<dynamic>("DeXuat_Group7Reject", new
            {
                Ma = ma,             
                DeXuat_LyDo = lydo
            }).FirstOrDefault();
        }
        public List<Group7DeXuatBangGiaDto> Group7SelectBangGia(int input)
        {
            return procedureHelper.GetData<Group7DeXuatBangGiaDto>("DeXuat_BangGia_Group7SelectBangGia", new
            {
                DeXuatBangGia_MaDeXuat = input
            })
           ;
        }
        public List<Group7DeXuatDto> Group7SelectDeXuat(int input)
        {
            return procedureHelper.GetData<Group7DeXuatDto>("DeXuat_Group7SelectDeXuat", new
            {
                Ma = input
            })
            ;
        }
    }
}
