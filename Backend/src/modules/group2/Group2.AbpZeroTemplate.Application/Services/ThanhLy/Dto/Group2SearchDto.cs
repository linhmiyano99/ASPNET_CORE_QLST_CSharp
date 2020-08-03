using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2SearchDto
    {
        public int? Ma { get; set; }
        public string Xe_Ten { get; set; }
        public string Xe_BienSo { get; set; }
        public string LoaiXe_Hang { get; set; }
        public int? LoaiXe_NamSX { get; set; }
        public string Xe_Mau { get; set; }
        public long? Xe_Gia { get; set; }
        public double? LoaiXe_DinhMucNhienLieu { get; set; }
    }
}
