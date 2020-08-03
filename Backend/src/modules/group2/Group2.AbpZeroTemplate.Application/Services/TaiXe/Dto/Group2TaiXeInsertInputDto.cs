using System;
using System.ComponentModel.DataAnnotations;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2TaiXeInsertInputDto
    {
	[Required]
        public string TaiXe_HoTen { get; set; }
        public string TaiXe_HangBangLai { get; set; }
        public DateTime? TaiXe_NgayBatDauLam { get; set; }
	[Required]
        public long? TaiXe_MucLuong { get; set; }
        public string TaiXe_UrlAnh { get; set; }
        public string TaiXe_UrlThongTin { get; set; }
        public string TaiXe_NguoiTao { get; set; }
        public string TaiXe_TenNguoiDung { get; set; }
    }
}
