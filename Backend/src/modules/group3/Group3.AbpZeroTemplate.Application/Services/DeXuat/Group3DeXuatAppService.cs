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
  public interface IGroup3DeXuatAppService : IApplicationService
  {
       IDictionary<string, object> DeXuat_Group3Insert(Group3DeXuatDto input);
    }
  public class Group3DeXuatAppService : BaseService, IGroup3DeXuatAppService
    {
    public Group3DeXuatAppService() { }
    public IDictionary<string, object> DeXuat_Group3Insert(Group3DeXuatDto input)
        {
        return procedureHelper.GetData<dynamic>("DeXuat_Group3Insert", input).FirstOrDefault();
    }
  }
}
