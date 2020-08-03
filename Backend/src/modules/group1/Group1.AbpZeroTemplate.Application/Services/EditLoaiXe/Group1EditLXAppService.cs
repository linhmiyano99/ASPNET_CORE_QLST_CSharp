using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group1.AbpZeroTemplate.Application.Share.Group1.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using GSoft.AbpZeroTemplate.Sessions.Dto;

namespace Group1.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup1EditLXAppService : IApplicationService
    {

        IDictionary<string, object> LOAIXE_Group1Edit(Group1LoaiXeDto input);

    }
    public class Group1EditLXAppService : BaseService, IGroup1EditLXAppService
    {
        public Group1EditLXAppService()
        {

        }
        public IDictionary<string, object> LOAIXE_Group1Edit(Group1LoaiXeDto input)
        {
            return procedureHelper.GetData<dynamic>("LOAIXE_Group1Edit", input).FirstOrDefault();
        }

    }
}

