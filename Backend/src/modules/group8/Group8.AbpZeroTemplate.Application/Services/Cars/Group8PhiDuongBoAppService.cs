
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group8.AbpZeroTemplate.Application.Share.Group8.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group8.AbpZeroTemplate.Web.Core.Cars
{
  public interface IGroup8PhiDuongBoAppService : IApplicationService
  {
    IDictionary<string, object> PhiDuongBo_Group8Delete(int ma);
    IDictionary<string, object> PhiDuongBo_Group8Edit(Group8PhiDuongBo input);
    IDictionary<string, object> PhiDuongBo_Group8Insert(Group8PhiDuongBo input);
    }
    public class Group8PhiDuongBoAppService : BaseService, IGroup8PhiDuongBoAppService
    {
    public Group8PhiDuongBoAppService()
    {

    }
    
    public IDictionary<string, object> PhiDuongBo_Group8Delete(int ma)
    {
        return procedureHelper.GetData<dynamic>("PhiDuongBo_Group8Delete", new
        {
            Ma = ma
        }).FirstOrDefault();
    }
    public IDictionary<string, object> PhiDuongBo_Group8Edit(Group8PhiDuongBo input)
    {
        return procedureHelper.GetData<dynamic>("PhiDuongBo_Group8Edit", input).FirstOrDefault();
    }
    public IDictionary<string, object> PhiDuongBo_Group8Insert(Group8PhiDuongBo input)
    {
        return procedureHelper.GetData<dynamic>("PhiDuongBo_Group8Insert", input).FirstOrDefault();
    }
    }
}
