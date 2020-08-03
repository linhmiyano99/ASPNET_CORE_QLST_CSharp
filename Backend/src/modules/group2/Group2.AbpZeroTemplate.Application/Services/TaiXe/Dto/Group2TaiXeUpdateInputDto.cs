using System;
using System.ComponentModel.DataAnnotations;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2TaiXeUpdateInputDto
    {
        public int? Ma { get; set; }
        [Required]
        public string TaiXe_HoTen { get; set; }
        [Required]
        public DateTime? TaiXe_NgayDongBaoHiem { get; set; }
        [Required]
        public DateTime? TaiXe_NgayHetHanBaoHiem { get; set; }
        [Required]
        public long? TaiXe_MucLuong { get; set; }
        [Required]
        public string TaiXe_UrlThongtin { get; set; }
    }
}
