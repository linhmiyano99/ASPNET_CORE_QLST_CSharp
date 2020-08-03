use DbPractice
go

create proc XE_Group5SearchByNumberPlate
@Xe_BienSo nvarchar(50) = NULL
as 
begin
	select Xe_Ten, 
		   LoaiXe_Ten, 
		   LoaiXe_Hang, 
		   Xe_BienSo, 
		   Xe_Mau, 
		   LoaiXe_NamSX, 
		   Xe_Gia, 
		   LoaiXe_DinhMucNhienLieu 
	from Xe x, LoaiXe l where 
	x.Xe_BienSo is null or 
	x.Xe_BienSo = '' or 
	x.Xe_BienSo like '%' + @Xe_BienSo + '%' and 
	x.Xe_MaLoaiXe=l.Ma and 
	x.Xe_TrangThai = 'N'
end
go

create proc Xe_Group5SearchById
@Ma int = null
as
begin
	select Xe_Ten, 
		   LoaiXe_Ten, 
		   LoaiXe_Hang, 
		   Xe_BienSo, 
		   Xe_Mau, 
		   LoaiXe_NamSX, 
		   Xe_Gia, 
		   LoaiXe_DinhMucNhienLieu 
	from Xe x, LoaiXe l where 
	x.Ma is null or x.Ma = @Ma and x.Xe_MaLoaiXe=l.Ma and x.Xe_TrangThai = 'N'
end
go

create proc Xe_Group5SearchByType
@LoaiXe_Ten nvarchar(50) = null
as 
begin
	select Xe_Ten, 
		   LoaiXe_Ten, 
		   LoaiXe_Hang, 
		   Xe_BienSo, 
		   Xe_Mau, 
		   LoaiXe_NamSX, 
		   Xe_Gia, 
		   LoaiXe_DinhMucNhienLieu 
	from Xe x, LoaiXe l where 
	(x.Xe_MaLoaiXe = l.Ma) and
	(l.LoaiXe_Ten is null or l.LoaiXe_Ten = '' or l.LoaiXe_Ten like '%' + @LoaiXe_Ten + '%') and
	(x.Xe_TrangThai = 'N')
end
go

create proc Xe_Group5SearchByBrandAndType
@LoaiXe_Hang nvarchar(50) = null,
@LoaiXe_Ten nvarchar(50) = null
as
begin
	select Xe_Ten, 
		   LoaiXe_Ten, 
		   LoaiXe_Hang, 
		   Xe_BienSo, 
		   Xe_Mau, 
		   LoaiXe_NamSX, 
		   Xe_Gia, 
		   LoaiXe_DinhMucNhienLieu 
	from Xe x, LoaiXe l where 
	(x.Xe_MaLoaiXe = l.Ma) and
	(l.LoaiXe_Ten is null or l.LoaiXe_Ten = '' or l.LoaiXe_Ten like '%' + @LoaiXe_Ten + '%') and
	(l.LoaiXe_Hang is null or l.LoaiXe_Hang='' or l.LoaiXe_Hang like '%' + @LoaiXe_Hang + '%') and
	(x.Xe_TrangThai = 'N')
end
go

create proc Xe_Group5DisplayVehicles
@Xe_TrangThai varchar(1) null
as
begin
	select Xe_Ten, 
		   LoaiXe_NamSX,
		   LoaiXe_SoLuong,
		   Xe_Mau,
		   Xe_Gia,
		   LoaiXe_DinhMucNhienLieu,
		   LoaiXe_Ten
	from Xe x, LoaiXe l where
	(x.Xe_MaLoaiXe = l.Ma) and
	(x.Xe_TrangThai = 'N')
end
go

create proc DEXUAT_Group5DisplaySuggestions
@DeXuat_TrangThai varchar(1) null
as
begin
	select LoaiXe_Hang, 
		   LoaiXe_NamSX, 
		   LoaiXe_SoLuong, 
		   DeXuat_Mau, 
		   LoaiXe_DinhMucNhienLieu, 
		   LoaiXe_Ten,
		   DeXuatBangGia_Gia,
		   DeXuatBangGia_ChuThau,
		   DeXuat_MucDich,
		   DeXuat_LyDo
	from LoaiXe l, DeXuat d, DeXuat_BangGia g 
	where
	(d.DeXuat_MaLoaiXe = l.Ma) and
	(d.DeXuat_MaBangGia = g.Ma) and
	(g.DeXuatBangGia_MaDeXuat = d.Ma) and
	(d.DeXuat_TrangThai = 'N')
end
go