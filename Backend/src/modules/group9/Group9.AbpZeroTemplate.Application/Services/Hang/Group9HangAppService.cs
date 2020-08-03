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
using Abp.Notifications;
using Abp.Domain.Repositories;
using GSoft.AbpZeroTemplate.Authorization.Users;
using System;

namespace Group9.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup9HangAppService : IApplicationService
    {
        IDictionary<string, object> Hang_Group9Update(Group9HangDto input);
        Group9HangDto Hang_Group9ById(int id);
        IDictionary<string, object> Hang_Group9Insert(Group9HangDto input);
        IDictionary<string, object> Hang_Group9Delete(int id);
        List<Group9HangDto> Hang_Group9Search(Group9HangDto input);
        List<Group9HangDto> Hang_Group9SearchAll();

    }
    public class Group9HangAppService : BaseService, IGroup9HangAppService
    {
        public Group9HangAppService()
        {

        }

        public Group9HangDto Hang_Group9ById(int id)
        {
            return procedureHelper.GetData<Group9HangDto>("Hang_Group9ById", new
            {
                Ma = id
            }).FirstOrDefault();
        }

        public IDictionary<string, object> Hang_Group9Delete(int id)
        {
            return procedureHelper.GetData<dynamic>("Hang_Group9Delete", new
            {
                Ma = id
            }).FirstOrDefault();
        }

        public IDictionary<string, object> Hang_Group9Insert(Group9HangDto input)
        {
            return procedureHelper.GetData<dynamic>("Hang_Group9Insert", input).FirstOrDefault();
        }

        public List<Group9HangDto> Hang_Group9Search(Group9HangDto input)
        {
            return procedureHelper.GetData<Group9HangDto>("Hang_Group9Search", input);
        }

        public List<Group9HangDto> Hang_Group9SearchAll()
        {
            return procedureHelper.GetData<Group9HangDto>("Hang_Group9SearchAll", new { });
        }

        public IDictionary<string, object> Hang_Group9Update(Group9HangDto input)
        {
            return procedureHelper.GetData<dynamic>("Hang_Group9Update", input).FirstOrDefault();
        }
    }
}
