using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.LichTrinh.Dto
{
    public class Group4LichTrinhDto
    {
        public int? Ma { get; set; }

        public DateTime? LichTrinh_NgayDi { get; set; }
        public DateTime? LichTrinh_NgayDen { get; set; }
        public int? LichTrinh_MaTuyenChay { get; set; }
        public int? LichTrinh_MaTaiXe { get; set; }
        public string LichTrinh_TrangThaiChuyen { get; set; }
        public string LichTrinh_NgayTao { get; set; }
        public string LichTrinh_NguoiTao { get; set; }
        public string LichTrinh_TrangThai {get;set;}

        public string TaiXe_HoTen { get; set; }

        public string TuyenChay_DiemDi { get; set; }
        public string TuyenChay_DiemDen { get; set; }

        public string Tuyenchay_SoKm { get; set; }
    }
}
