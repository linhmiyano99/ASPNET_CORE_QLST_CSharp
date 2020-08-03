using System;

namespace Group10.AbpZeroTemplate.Application.Share.Group10.Dto
{
    public class Group10SuaChuaDto
    {
        public int? Ma { get; set; }
        public int? SuaChua_MaXe { get; set; }
        public string SuaChua_BienSo { get; set; }
        public int? SuaChua_MaTaiXe { get; set; }
        public string SuaChua_TenTaiXe { get; set; }
        public string SuaChua_LyDo { get; set; }
        public int? SuaChua_ThanhTien { get; set; }
        public DateTime? SuaChua_NgayTao { get; set; }
        public string SuaChua_NguoiTao { get; set; }
        public string SuaChua_TrangThai { get; set; }
        public string SuaChua_TrangThaiDuyet { get; set; }
        public DateTime? SuaChua_NgayDuyet { get; set; }
        public string SuaChua_NguoiDuyet { get; set; }
        public string SuaChua_TrangThaiSuaChua { get; set; }
    }
}
