using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group4.AbpZeroTemplate.Web.Core.Services.BangGia.Dto
{
    public class Group4BangGiaDto
    {
        public int? Ma { get; set; }
        public int? DeXuatBangGia_MaDeXuat { get; set; }
        public int? DeXuatBangGia_Gia { get; set; }

        public string DeXuatBangGia_ChuThau { get; set; }
    }
}
