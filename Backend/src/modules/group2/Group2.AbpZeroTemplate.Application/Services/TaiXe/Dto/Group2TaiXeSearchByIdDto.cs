using System;
using System.ComponentModel.DataAnnotations;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2TaiXeSearchByIdDto
    {
        public int? ma { get; set; }
        public string TaiXe_HoTen { get; set; }
        public string TaiXe_HangBangLai { get; set; }
        public string TaiXe_TrangThaiLamViec { get; set; }
        public int? TaiXe_MaHopDong { get; set; }
        public DateTime? HopDong_NgayBatDauLam { get; set; }
        public long? HopDong_MucLuong { get; set; }
        public DateTime? HopDong_NgayHetHan { get; set; }
        public DateTime? HopDong_NgayDongBaoHiem { get; set; }
        public string HopDong_TrangThai { get; set; }
    }
}