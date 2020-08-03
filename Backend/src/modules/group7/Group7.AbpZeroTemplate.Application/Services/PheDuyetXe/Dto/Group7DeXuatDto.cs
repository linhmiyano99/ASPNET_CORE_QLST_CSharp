using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group7.AbpZeroTemplate.Web.Core.Services.PheDuyetXe.Dto
{
    public class Group7DeXuatDto
    {
        public int? Ma { get; set; }
        public int? DeXuat_MaLoaiXe { get; set; }
        public string DeXuat_TenXe { get; set; }
        public string DeXuat_Mau { get; set; }
        public string DeXuat_MucDich { get; set; }
        public string DeXuat_LyDo { get; set; }
        public string DeXuat_TrangThai { get; set; }
        public string DeXuat_NguoiTao { get; set; }
        public DateTime? DeXuat_NgayTao { get; set; }
        public int? DeXuat_MaBangGia { get; set; }
        public int? DeXuat_SoLuong { get; set; }
        public string LoaiXe_Hang { get; set; }
        public int? LoaiXe_NamSX { get; set; }
    }
}
