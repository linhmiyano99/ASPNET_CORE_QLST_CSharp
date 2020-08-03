using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group10.AbpZeroTemplate.Application.Share.Group10.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group10.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup10SuaChuaAppService : IApplicationService
    {
        IDictionary<string, object> SuaChua_Group10Insert(Group10SuaChuaDto input);
        IDictionary<string, object> SuaChua_Group10Update(Group10SuaChuaDto input);
        IDictionary<string, object> SuaChua_Group10Delete(Group10SuaChuaDto input);
        IDictionary<string, object> SuaChua_Group10Approve(Group10SuaChuaDto input);
        IDictionary<string, object> SuaChua_Group10Refuse(Group10SuaChuaDto input);
        List<Group10SuaChuaDto> SuaChua_Group10Search(Group10SuaChuaDto input);
        Group10SuaChuaDto SuaChua_Group10SearchById(Group10SuaChuaDto input);
        List<Group10XeDto> Xe_Group10GetAllXeCoBienSo();
        Group10TaiXeDto TaiXe_Group10GetTaiXeByUsername(Group10TaiXeDto input);
    }
    public class Group10SuaChuaAppService : BaseService, IGroup10SuaChuaAppService
    {
        public Group10SuaChuaAppService()
        {

        }
        public IDictionary<string, object> SuaChua_Group10Insert(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<dynamic>("SuaChua_Group10Insert", input).FirstOrDefault();
        }

        public IDictionary<string, object> SuaChua_Group10Update(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<dynamic>("SuaChua_Group10Update", input).FirstOrDefault();
        }

        public IDictionary<string, object> SuaChua_Group10Delete(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<dynamic>("SuaChua_Group10Delete", input).FirstOrDefault();
        }

        public IDictionary<string, object> SuaChua_Group10Approve(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<dynamic>("SuaChua_Group10Approve", input).FirstOrDefault();
        }

        public IDictionary<string, object> SuaChua_Group10Refuse(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<dynamic>("SuaChua_Group10Refuse", input).FirstOrDefault();
        }

        public List<Group10SuaChuaDto> SuaChua_Group10Search(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<Group10SuaChuaDto>("SUACHUA_Group10Search", input);
        }
        public List<Group10XeDto> Xe_Group10GetAllXeCoBienSo()
        {
            return procedureHelper.GetData<Group10XeDto>("Xe_Group10GetAllBienSo", 0);
        }

        public Group10SuaChuaDto SuaChua_Group10SearchById(Group10SuaChuaDto input)
        {
            return procedureHelper.GetData<Group10SuaChuaDto>("SUACHUA_Group10Search", input).FirstOrDefault();
        }

        public Group10TaiXeDto TaiXe_Group10GetTaiXeByUsername(Group10TaiXeDto input)
        {
            return procedureHelper.GetData<Group10TaiXeDto>("TaiXe_Group10GetTaiXeByUsername", input).FirstOrDefault();
        }
    }
}
