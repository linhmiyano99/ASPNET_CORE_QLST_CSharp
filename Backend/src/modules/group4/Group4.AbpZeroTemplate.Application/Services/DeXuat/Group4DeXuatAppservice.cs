using Abp.Application.Services;
using Abp.UI.Inputs;
using Group4.AbpZeroTemplate.Web.Core.Services.DeXuat.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.DeXuat
{
    public interface IGroup4DeXuatAppService : IApplicationService
    {
        List<Group4DeXuatDto> DEXUAT_Group4Search(Group4DeXuatDto input);

    }
    public class Group4DeXuatAppService : BaseService, IGroup4DeXuatAppService
    {
        public List<Group4DeXuatDto> DEXUAT_Group4Search(Group4DeXuatDto input)
        {
            return procedureHelper.GetData<Group4DeXuatDto>("DEXUAT_Group4Search", input);
        }
    }

}
