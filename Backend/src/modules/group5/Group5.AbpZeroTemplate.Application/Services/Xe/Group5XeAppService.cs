using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group5.AbpZeroTemplate.Application.Share.Group5.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group5.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup5XeAppService : IApplicationService
    {
        string test();
        List<Group5XeDto> XE_Group5SearchByNumberPlate(string numberPlate);
        Group5XeDto XE_Group5SearchById(int id);
        List<Group5XeDto> XE_Group5SearchByType(string loaiXe);
        List<Group5XeDto> XE_Group5SearchByBrandAndType(Group5XeDto input);
        List<Group5XeDto> Xe_Group5DisplayVehicles();
        List<Group5DeXuatDto> DEXUAT_Group5DisplaySuggestions();
    }
    public class Group5XeAppService : BaseService, IGroup5XeAppService
    {
        public Group5XeAppService()
        {

        }
        public string test()
        {
            return "Group5 Config success!";
        }

        public List<Group5XeDto> Xe_Group5DisplayVehicles()
        {
            return procedureHelper.GetData<Group5XeDto>("Xe_Group5DisplayVehicles", new
            {
                Xe_TrangThai = "N"
            });
        }

        public List<Group5DeXuatDto> DEXUAT_Group5DisplaySuggestions()
        {
            return procedureHelper.GetData<Group5DeXuatDto>("DEXUAT_Group5DisplaySuggestions", new
            {
                DeXuat_TrangThai = "N"
            });
        }

        public List<Group5XeDto> XE_Group5SearchByBrandAndType(Group5XeDto input)
        {
            return procedureHelper.GetData<Group5XeDto>("Xe_Group5SearchByBrandAndType", input);
        }

        public Group5XeDto XE_Group5SearchById(int id)
        {
            return procedureHelper.GetData<Group5XeDto>("Xe_Group5SearchById", new
            {
                Ma = id
            }).FirstOrDefault();
        }

        public List<Group5XeDto> XE_Group5SearchByNumberPlate(string numberPlate)
        {
            return procedureHelper.GetData<Group5XeDto>("XE_Group5SearchByNumberPlate", new
            {
                Xe_BienSo = numberPlate
            });
        }

        public List<Group5XeDto> XE_Group5SearchByType(string loaiXe)
        {
            return procedureHelper.GetData<Group5XeDto>("Xe_Group5SearchByType", new
            {
                LoaiXe_Ten = loaiXe
            });
        }
    }
}
