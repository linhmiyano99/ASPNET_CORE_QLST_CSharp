using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group3.AbpZeroTemplate.Application.Share.Group3.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group3.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup3BaoHanhAppService : IApplicationService
    {
        IDictionary<string, object> BaoHanh_Group3Insert(Group3BaoHanhInsertDto input);
        List<Group3BaoHanhSearchDto> BaoHanh_Group3Search(Group3BaoHanhSearchDto input);
    }
    public class Group3BaoHanhAppService : BaseService, IGroup3BaoHanhAppService
    {
        public Group3BaoHanhAppService() { }
        public IDictionary<string, object> BaoHanh_Group3Insert(Group3BaoHanhInsertDto input)
        {
            return procedureHelper.GetData<dynamic>("BaoHanh_Group3Insert", input).FirstOrDefault();
        }
        public List<Group3BaoHanhSearchDto> BaoHanh_Group3Search(Group3BaoHanhSearchDto input)
        {
            return procedureHelper.GetData<Group3BaoHanhSearchDto>("BaoHanh_Group3Search", input);
        }
    }
}
