using Abp.Application.Services;
using Group4.AbpZeroTemplate.Web.Core.Services.BangGia.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.BangGia
{
    public interface IGroup4BangGiaAppService : IApplicationService
    {
        List<Group4BangGiaDto> BANGIA_Group4Search(Group4BangGiaDto input);
    }
    public class Group4BangGiaAppService : BaseService, IGroup4BangGiaAppService
    {
        public List<Group4BangGiaDto> BANGIA_Group4Search(Group4BangGiaDto input)
        {
            return procedureHelper.GetData<Group4BangGiaDto>("BANGGIA_Group4Search", input);
        }

    }

}
