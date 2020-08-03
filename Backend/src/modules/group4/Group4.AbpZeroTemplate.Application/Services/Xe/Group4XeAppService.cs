using Abp.Application.Services;
using Group4.AbpZeroTemplate.Application.Share.Group4.Dto;
using Group4.AbpZeroTemplate.Web.Core.Services.Xe.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.Xe
{
    public interface IGroup4XeAppService : IApplicationService
    {
        List<Group4XeDto> XE_Group4Search(Group4XeDto input);

    }
    public class Group4XeAppService: BaseService, IGroup4XeAppService
    {
       public List<Group4XeDto> XE_Group4Search(Group4XeDto input)
        {
            return procedureHelper.GetData<Group4XeDto>("Xe_Group4Search", input);
        }
    }
}
