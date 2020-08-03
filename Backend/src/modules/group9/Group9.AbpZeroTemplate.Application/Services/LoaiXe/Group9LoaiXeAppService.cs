using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group9.AbpZeroTemplate.Application.Share.Group9.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group9.AbpZeroTemplate.Web.Core.Cars
{
  public interface IGroup9LoaiXeAppService : IApplicationService
  {
    string test();
        IDictionary<string, object> LOAIXE_Group9Insert(Group9LoaiXeDto input);

    }
    public class Group9LoaiXeAppService : BaseService, IGroup9LoaiXeAppService
    {
    public Group9LoaiXeAppService()
    {

    }

        public IDictionary<string, object> LOAIXE_Group9Insert(Group9LoaiXeDto input)
        {
            return procedureHelper.GetData<dynamic>("LOAIXE_Group9Insert", input).FirstOrDefault();
        }

        public string test()
    {
      return "Group9 Config success!";
    }
  }
}
