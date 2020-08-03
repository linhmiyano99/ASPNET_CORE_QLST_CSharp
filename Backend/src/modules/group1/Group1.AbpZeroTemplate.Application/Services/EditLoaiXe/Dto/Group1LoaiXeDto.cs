
using System;

namespace Group1.AbpZeroTemplate.Application.Share.Group1.Dto
{
    public class Group1LoaiXeDto
    {
        public int? Ma { get; set; }
        public string LoaiXe_Ten { get; set; }
        public string LoaiXe_Hang { get; set; }
        public float? LoaiXe_DinhMucNhienLieu { get; set; }
        public int? LoaiXe_NamSX { get; set; }
        public int? LoaiXe_SoLuong { get; set; }
        public string LoaiXe_TrangThai { get; set; }
        public DateTime? LoaiXe_NgayTao { get; set; }
        public string LoaiXe_NguoiTao { get; set; }
        public string LoaiXe_LoaiNhienLieu { get; set; }
    }
}
