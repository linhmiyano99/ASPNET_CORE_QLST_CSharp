using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group6.AbpZeroTemplate.Application.Share.Group6.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group6.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup6XeAppService : IApplicationService
    {
        IDictionary<string, object> Xe_Group6Update(Group6XeDto input);
        List<Group6XeDto> Xe_Group6_SearchByDay(string start_day, string end_day);
        string test();
    }
    public class Group6XeAppService : BaseService, IGroup6XeAppService
    {
        public Group6XeAppService()
        {

        }
        public IDictionary<string, object> Xe_Group6Update(Group6XeDto input)
        {
            return procedureHelper.GetData<dynamic>("Xe_Group6Update", input).FirstOrDefault();
        }
        public List<Group6XeDto> Xe_Group6_SearchByDay(string start_day,string end_day)
        {
            return procedureHelper.GetData<Group6XeDto>("Xe_Group6_SearchByDay", new
            {
                start_day = start_day,
                end_day = end_day
            });
        }
        public string test()
        {
            return "Group6 Config success!";
        }

    }
}