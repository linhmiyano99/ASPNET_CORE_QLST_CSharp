using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2TaiXeSearchInputDto
    {
        public int? TaiXe_Ma { get; set; }
        public string TaiXe_HoTen { get; set; }
        public string TaiXe_TrangThaiLamViec { get; set; }
        public string TaiXe_HangBangLai { get; set; }
        public DateTime? TaiXe_NgayBatDauLam { get; set; }
        public long? TaiXe_MucLuongNho { get; set; }
        public long? TaiXe_MucLuongLon { get; set; }
    }
}
