using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group1.AbpZeroTemplate.Web.Core.Services.EditTienBaoHanh.Dto
{
     public class Group1TienBaoHanhDto
    {
        public int? Ma { get; set; }
        public long? BaoHanh_ChiPhi { get; set; }
        public DateTime? BaoHanh_NgayBaoHanh { get; set; }
        public string BaoHanh_QuyetDinh { get; set; }
        public DateTime? BaoHanh_NgayTao { get; set; }
        public string BaoHanh_NguoiTao { get; set; }
        public string BaoHanh_TrangThai { get; set; }
        public int? BaoHanh_MaXe { get; set; }
    }
}
