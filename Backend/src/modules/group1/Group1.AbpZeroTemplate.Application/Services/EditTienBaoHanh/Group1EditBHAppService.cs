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
using Group1.AbpZeroTemplate.Web.Core.Services.EditTienBaoHanh.Dto;

namespace Group1.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup1EditBHAppService : IApplicationService
    {

        IDictionary<string, object> BAOHANH_Group1Edit(Group1TienBaoHanhDto input);
        IDictionary<string, object> BAOHANH_Group1Del(int ma);

    }
    public class Group1EditBHAppService : BaseService, IGroup1EditBHAppService
    {
        public Group1EditBHAppService()
        {

        }
        IDictionary<string, object> IGroup1EditBHAppService.BAOHANH_Group1Edit(Group1TienBaoHanhDto input)
        {
            return procedureHelper.GetData<dynamic>("BAOHANH_Group1Edit", input).FirstOrDefault();
        }
        public IDictionary<string, object> BAOHANH_Group1Del(int ma)
        {
            return procedureHelper.GetData<dynamic>("BAOHANH_Group1Del", new
            {
                Ma = ma
            }).FirstOrDefault();
        }
    }
}

