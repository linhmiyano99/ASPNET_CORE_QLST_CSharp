using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group3.AbpZeroTemplate.Application.Share.Group3.Dto
{
    public class Group3BaoHanhInsertDto
    {
        //public long? BaoHanh_ChiPhi { get; set; }
        //public DateTime? BaoHanh_NgayBaoHanh { get; set; }
        //public string BaoHanh_QuyetDinh { get; set; }
        //public string BaoHanh_NguoiTao { get; set; }
        //public int? BaoHanh_MaXe { get; set; }
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
