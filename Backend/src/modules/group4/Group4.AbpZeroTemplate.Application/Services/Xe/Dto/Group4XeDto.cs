using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.Xe.Dto
{
    public class Group4XeDto
    {
        public int? Ma { get; set; }
        public int? Xe_MaLoaiXe { get; set; }
        public string Xe_Ten { get; set; }
        public string Xe_BienSo { get; set; }
        public long? Xe_Gia { get; set; }
        public string Xe_Mau { get; set; }
        public DateTime? Xe_NgayTao { get; set; }
        public string Xe_NguoiTao { get; set; }
        public string LoaiXe_Ten { get; set; }
        public string LoaiXe_Hang { get; set; }
        public float? LoaiXe_DinhMucNhienLieu {get;set;}
        public string LoaiXe_LoaiNhienLieu { get; set; }
        public int? LoaiXe_NamSX { get; set; }

    }
}
