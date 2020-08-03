using System;
using System.ComponentModel.DataAnnotations;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2TaiXeQuickUpdateInputDto
    {
        public int? Ma { get; set; }
        [Required]
        public string TaiXe_HangBangLai { get; set; }
        [Required]
        public string TaiXe_TrangThaiLamViec { get; set; }
    }
}
