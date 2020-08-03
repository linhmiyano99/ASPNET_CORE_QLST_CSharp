
using System;
using System.ComponentModel.DataAnnotations;

namespace Group2.AbpZeroTemplate.Application.Share.Group2.Dto
{
    public class Group2ThanhLyDto
    {
        public int? ThanhLy_MaXe { get; set; }
        [Required]
        public string ThanhLy_LyDo { get; set; }
        [Required]
        public string ThanhLy_NguoiMua { get; set; }
        [Required]
        public long? ThanhLy_SoTien { get; set; }
        [Required]
        public string ThanhLy_NguoiTao { get; set; }
        [Required]
        public DateTime? ThanhLy_NgayTao { get; set; }
    }
}
