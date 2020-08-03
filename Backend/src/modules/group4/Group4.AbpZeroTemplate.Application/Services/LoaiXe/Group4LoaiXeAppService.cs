using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group4.AbpZeroTemplate.Application.Share.Group4.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group4.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup4LoaiXeAppService : IApplicationService
    {
        string test();
        List<Group4LoaiXeDto> LOAIXE_Group4Search(Group4LoaiXeDto input);
        Group4LoaiXeDto LOAIXE_Group4SearchById(int ma);

        IDictionary<string, object> LOAIXE_Group4Delete(int ma);
    }
    public class Group4LoaiXeAppService : BaseService, IGroup4LoaiXeAppService
    {
        public Group4LoaiXeAppService()
        {

        }
        public string test()
        {
            return "Group4 Config success!";
        }

        public List<Group4LoaiXeDto> LOAIXE_Group4Search(Group4LoaiXeDto input)
        {
            return procedureHelper.GetData<Group4LoaiXeDto>("LOAIXE_Group4Search", input);
        }

        public Group4LoaiXeDto LOAIXE_Group4SearchById(int ma)
        {
            return procedureHelper.GetData<Group4LoaiXeDto>("LOAIXE_Group4SearchById", new
            {
                Ma = ma
            }).FirstOrDefault();
        }
        public IDictionary<string, object> LOAIXE_Group4Delete(int ma)
        {
            return procedureHelper.GetData<dynamic>("LOAIXE_Group4Delete", new
            {
                Ma = ma
            }).FirstOrDefault();
        }
    }
}
