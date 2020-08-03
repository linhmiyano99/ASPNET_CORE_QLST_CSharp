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
    public interface IGroup9BaoTriAppService : IApplicationService
    {
        IDictionary<string, object> BAOTRI_Group9Update(Group9BaoTriDto input);
        Group9BaoTriDto BAOTRI_Group9ById(int id);
        IDictionary<string, object> BAOTRI_Group9Insert(Group9BaoTriDto input);
        IDictionary<string, object> BAOTRI_Group9Delete(int id);
        List<Group9BaoTriDto> BAOTRI_Group9Search(Group9BaoTriDto input);
        List<Group9BaoTriDto> BAOTRI_Group9SearchAll();
        IDictionary<string, object> BAOTRI_Group9App(int id, string checkerId);
        string GetCurrentUserName();
        Task BAOTRI_Group9SendNotification(string ma, string maThongBao, int maXe, DateTime? ngayBaoTri, int loai = 0);
        List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalPropose(string maNguoiTao);
        List<Group9BaoTriDto> BAOTRI_Group9SearchAllPersonal(string maNguoiTao);
        List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalApproved(string maNguoiTao);
        List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalDone(string maNguoiTao);
        List<Group9XeDto> BAOTRI_Group9ShouldMaintain();
        List<Group9XeDto> BAOTRI_Group9UrgentMaintain();
        List<Group9XeDto> BAOTRI_Group9MaintainAll();
        List<Group9XeDto> BAOTRI_Group9SearchXeStateNoMaintain();
        List<Group9XeDto> BAOTRI_Group9SearchXeInMaintain();

    }
    public class Group9BaoTriAppService : BaseService, IGroup9BaoTriAppService
    {
        private readonly INotificationPublisher notificationPublisher;
        private readonly IRepository<User, long> userRepository;
        public Group9BaoTriAppService(INotificationPublisher notificationPublisher, IRepository<User, long> userRepository)
        {
            this.notificationPublisher = notificationPublisher;
            this.userRepository = userRepository;
        }

        public IDictionary<string, object> BAOTRI_Group9App(int id, string checkerId)
        {
            return procedureHelper.GetData<dynamic>("BAOTRI_Group9App", new
            {
                Id = id,
                CheckerId = checkerId
            }).FirstOrDefault();
        }

        public Group9BaoTriDto BAOTRI_Group9ById(int id)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9ById", new
            {
                Ma = id
            }).FirstOrDefault();
        }

        public IDictionary<string, object> BAOTRI_Group9Delete(int id)
        {
            return procedureHelper.GetData<dynamic>("BAOTRI_Group9Delete", new
            {
                Ma = id
            }).FirstOrDefault();
        }

        public IDictionary<string, object> BAOTRI_Group9Insert(Group9BaoTriDto input)
        {
            return procedureHelper.GetData<dynamic>("BAOTRI_Group9Insert", input).FirstOrDefault();
        }

        public List<Group9BaoTriDto> BAOTRI_Group9Search(Group9BaoTriDto input)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9Search", input);
        }

        public List<Group9BaoTriDto> BAOTRI_Group9SearchAll()
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9SearchAll", new { });
        }

        public IDictionary<string, object> BAOTRI_Group9Update(Group9BaoTriDto input)
        {
            return procedureHelper.GetData<dynamic>("BAOTRI_Group9Update", input).FirstOrDefault();
        }

        public async Task BAOTRI_Group9SendNotification(string ma, string maThongBao, int maXe, DateTime? ngayBaoTri = null, int loai = 0)

        {
            if (ngayBaoTri == null)
            {
                ngayBaoTri = DateTime.UtcNow;
            }
            var user = userRepository.GetAll().Where(x => x.UserName == ma).FirstOrDefault();
            if (loai == 0)
            {
                await notificationPublisher.PublishAsync(
                    "Thông báo bảo trì xe (" + maThongBao + ")",
                    new MessageNotificationData("[YÊU CẦU BẢO TRÌ] Mã xe: " + maXe + ";Ngày: " + ngayBaoTri?.ToString("MM-dd-yyyy")),
                    severity: NotificationSeverity.Success,
                    userIds: new[] { user.ToUserIdentifier() }
                    );
            }
            else
            {
                await notificationPublisher.PublishAsync(
                    "Thông báo bảo trì xe (" + maThongBao + ")",
                    new MessageNotificationData("[HOÀN TẤT BẢO TRÌ] Mã xe: " + maXe + ";Ngày: " + ngayBaoTri?.ToString("MM-dd-yyyy")),
                    severity: NotificationSeverity.Success,
                    userIds: new[] { user.ToUserIdentifier() }
                    );
            }
        }

        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalPropose(string maNguoiTao)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9SearchPersonalPropose"
                , new { BaoTri_MaNguoiTao = maNguoiTao });
        }

        public List<Group9BaoTriDto> BAOTRI_Group9SearchAllPersonal(string maNguoiTao)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9SearchAllPersonal"
                          , new { BaoTri_MaNguoiTao = maNguoiTao });
        }

        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalApproved(string maNguoiTao)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9SearchPersonalApproved"
                          , new { BaoTri_MaNguoiTao = maNguoiTao });
        }

        public List<Group9BaoTriDto> BAOTRI_Group9SearchPersonalDone(string maNguoiTao)
        {
            return procedureHelper.GetData<Group9BaoTriDto>("BAOTRI_Group9SearchPersonalDone"
                          , new { BaoTri_MaNguoiTao = maNguoiTao });
        }

        public List<Group9XeDto> BAOTRI_Group9ShouldMaintain()
        {
            return procedureHelper.GetData<Group9XeDto>("BAOTRI_Group9ShouldMaintain", new { });
        }

        public List<Group9XeDto> BAOTRI_Group9UrgentMaintain()
        {
            return procedureHelper.GetData<Group9XeDto>("BAOTRI_Group9UrgentMaintain", new { });
        }

        public List<Group9XeDto> BAOTRI_Group9MaintainAll()
        {
            return procedureHelper.GetData<Group9XeDto>("BAOTRI_Group9MaintainAll", new { });
        }

        public List<Group9XeDto> BAOTRI_Group9SearchXeStateNoMaintain()
        {
            return procedureHelper.GetData<Group9XeDto>("BAOTRI_Group9SearchXeStateNoMaintain", new { });
        }

        public List<Group9XeDto> BAOTRI_Group9SearchXeInMaintain()
        {
            return procedureHelper.GetData<Group9XeDto>("BAOTRI_Group9SearchXeInMaintain", new { });
        }
    }
}
