using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.TuyenChay.Dto
{
    public class Group4TuyenChayDto
    {
        public int? Ma { get; set; }
        
        public string TuyenChay_Ten { get; set; }

        public string TuyenChay_DiemDi { get; set; }

        public string TuyenChay_DiemDen { get; set; }

        public string TuyenChay_SoKm { get; set; }

        public string TuyenChay_NguoiTao { get; set; }

        public DateTime? TuyenChay_NgayTao { get; set; }
    }
}
