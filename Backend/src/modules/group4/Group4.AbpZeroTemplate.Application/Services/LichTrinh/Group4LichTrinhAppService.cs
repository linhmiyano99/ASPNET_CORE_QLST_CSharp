using Abp.Application.Services;
using Group4.AbpZeroTemplate.Web.Core.Services.LichTrinh.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.LichTrinh
{
    public interface IGroup4LichTrinhAppService : IApplicationService
    {
        IDictionary<string, object> LICHTRINH_Group4Insert(Group4LichTrinhDto input);
        List<Group4LichTrinhDto> LICHTRINH_Group4Search(Group4LichTrinhDto input);
        Group4LichTrinhDto LICTRINH_Group4SearchById(int ma);
        IDictionary<string, object> LICHTRINH_Group4DeleteById(int ma);
        IDictionary<string, object> LICHTRINH_Group4Update(Group4LichTrinhDto input);

    }
    public class Group4LichTrinhAppService: BaseService, IGroup4LichTrinhAppService
    {
        public IDictionary<string, object> LICHTRINH_Group4Insert(Group4LichTrinhDto input)
        {
            return procedureHelper.GetData<dynamic>("LICHTRINH_Group4Insert", input).FirstOrDefault();
        }
        public List<Group4LichTrinhDto> LICHTRINH_Group4Search(Group4LichTrinhDto input)
        {
            return procedureHelper.GetData<Group4LichTrinhDto>("LICHTRINH_Group4Search", input);
        }
        public Group4LichTrinhDto LICTRINH_Group4SearchById(int ma)
        {
            return procedureHelper.GetData<Group4LichTrinhDto>("LICHTRINH_Group4SearchById", new
            {
                Ma = ma
            }).FirstOrDefault();

        }
        public IDictionary<string, object> LICHTRINH_Group4DeleteById(int ma)
        {
            return procedureHelper.GetData<dynamic>("LICHTRINH_Group4DeleteById", new
            {
                Ma = ma
            }).FirstOrDefault();

        }

        public IDictionary<string, object> LICHTRINH_Group4Update(Group4LichTrinhDto input)
        {
            return procedureHelper.GetData<dynamic>("LICHTRINH_Group4Update",input).FirstOrDefault();
        }
    }
}
