using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group2.AbpZeroTemplate.Application.Share.Group2.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group2.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup2TaiXeAppService : IApplicationService
    {
        Group2TaiXeSearchByIdDto TAIXE_Group2SearchById(int Ma);
        List<Group2TaiXeSearchDto> TAIXE_Group2Search(Group2TaiXeSearchInputDto input);
        IDictionary<string, object> TAIXE_Group2Insert(Group2TaiXeInsertInputDto input);
        IDictionary<string, object> TAIXE_Group2Del(int Ma);
        IDictionary<string, object> TAIXE_Group2QuickUpdate(Group2TaiXeQuickUpdateInputDto input);
        IDictionary<string, object> TAIXE_Group2Update(Group2TaiXeUpdateInputDto input);

    }
    public class Group2TaiXeAppService : BaseService, IGroup2TaiXeAppService
    {
        public Group2TaiXeAppService()
        {

        }
        public Group2TaiXeSearchByIdDto TAIXE_Group2SearchById(int Ma)
        {
            return procedureHelper.GetData<Group2TaiXeSearchByIdDto>("TAIXE_Group2SearchById", new
            {
                TaiXe_Ma = Ma
            }).FirstOrDefault();
        }

        public List<Group2TaiXeSearchDto> TAIXE_Group2Search(Group2TaiXeSearchInputDto input)
        {
            return procedureHelper.GetData<Group2TaiXeSearchDto>("TAIXE_Group2Search", input);
        }

        public IDictionary<string, object> TAIXE_Group2Insert(Group2TaiXeInsertInputDto input)
        {
            return procedureHelper.GetData<dynamic>("TAIXE_Group2Insert", input).FirstOrDefault();
        }

        public IDictionary<string, object> TAIXE_Group2Del(int Ma)
        {
            return procedureHelper.GetData<dynamic>("TAIXE_Group2Del", new
            {
                Ma = Ma
            }).FirstOrDefault();
        }
        public IDictionary<string, object> TAIXE_Group2QuickUpdate(Group2TaiXeQuickUpdateInputDto input)
        {
            return procedureHelper.GetData<dynamic>("TAIXE_Group2QuickUpdate", input).FirstOrDefault();
        }
        public IDictionary<string, object> TAIXE_Group2Update(Group2TaiXeUpdateInputDto input)
        {
            return procedureHelper.GetData<dynamic>("TAIXE_Group2Update", input).FirstOrDefault();
        }
    }
}
