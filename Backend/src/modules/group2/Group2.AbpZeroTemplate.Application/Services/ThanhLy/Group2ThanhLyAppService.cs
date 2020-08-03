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
    public interface IGroup2ThanhLyAppService : IApplicationService
    {
        Group2SearchDto THANHLY_Group2Search(int id);
        IDictionary<string, object> THANHLY_Group2ThanhLy(Group2ThanhLyDto input);
        //string test();

    }
    public class Group2ThanhLyAppService : BaseService, IGroup2ThanhLyAppService
    {
        public Group2ThanhLyAppService()
        {

        }
        public Group2SearchDto THANHLY_Group2Search(int id)
        {
            return procedureHelper.GetData<Group2SearchDto>("THANHLY_Group2Search", new
            {
                ThanhLy_MaXe = id
            }).FirstOrDefault();
        }
        public IDictionary<string, object> THANHLY_Group2ThanhLy(Group2ThanhLyDto input)
        {
            return procedureHelper.GetData<dynamic>("THANHLY_Group2ThanhLy", input).FirstOrDefault();
        }

        //public string test()
        //{
        //    return "Group2 Config success!";
        //}
    }
}
