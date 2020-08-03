use DbPratice

Go

alter proc Xe_Group4Search
@Ma int = NULL
,@Xe_MaLoaiXe int = NULL
,@Xe_Ten nvarchar(50) = NULL
,@Xe_BienSo nvarchar(50) = NULL
,@Xe_Gia bigint = NULL
,@Xe_Mau nvarchar(50) = NULL
as
begin
	select Xe.Ma as Ma, Xe_MaLoaiXe, Xe_Ten, Xe_BienSo, Xe.Xe_Gia, Xe.Xe_Mau, Xe.Xe_NgayTao, Xe.Xe_NguoiTao,
	LoaiXe.LoaiXe_Ten, LoaiXe.LoaiXe_Hang, LoaiXe.LoaiXe_DinhMucNhienLieu, LoaiXe_LoaiNhienLieu, LoaiXe.LoaiXe_NamSX
	from Xe
	Inner Join LoaiXe
	On Xe.Xe_MaLoaiXe = LoaiXe.Ma
	where (@Ma is null or Xe.Ma = @Ma)
	and (@Xe_MaLoaiXe is Null or Xe.Xe_MaLoaiXe = @Xe_MaLoaiXe)
	and (@Xe_Ten is Null or @Xe_Ten = '' or Xe.Xe_Ten like '%' + @Xe_Ten + '%')
	and (@Xe_BienSo is Null or @Xe_BienSo = '' or Xe.Xe_BienSo = '%' + @Xe_BienSo + '%')
	and (@Xe_Gia is null or Xe.Xe_Gia = @Xe_Gia)
	and (@Xe_Mau is Null or @Xe_Mau = '' or Xe.Xe_Mau = '%' + @Xe_Mau + '%')
	and (Xe_TrangThai != 'X')
end

go

create proc DEXUAT_Group4Search
@Ma int = NULL
,@DeXuat_MaLoaiXe int = NULL
,@DeXuat_TenXe nvarchar(50) = NULL
,@DeXuat_Mau nvarchar(20) = NULL
,@DeXuat_MaBangGia int = NULL
,@DeXuat_SoLuong int = NULL
as
begin
	select DX.Ma, DX.DeXuat_TenXe, DX.DeXuat_Mau, DX.DeXuat_MaBangGia, DX.DeXuat_LyDo, DX.DeXuat_MaLoaiXe,
	DX.DeXuat_MucDich, DX.DeXuat_NgayTao, DX.DeXuat_NguoiTao, DX.DeXuat_SoLuong,
	LX.LoaiXe_Ten, LX.LoaiXe_Hang, LX.LoaiXe_NamSX
	from DeXuat as Dx, LoaiXe as Lx
	where (@Ma is null or Dx.Ma = @Ma)
	and (@DeXuat_MaLoaiXe is null or DeXuat_MaLoaiXe = @DeXuat_MaLoaiXe)
	and (@DeXuat_TenXe is null or @DeXuat_TenXe = '' or DeXuat_TenXe like '%' + @DeXuat_TenXe + '%')
	and (@DeXuat_Mau is null or @DeXuat_Mau = '' or DeXuat_Mau like '%' +  @DeXuat_Mau + '%')
	and (@DeXuat_MaBangGia is null or DeXuat_MaBangGia = @DeXuat_MaBangGia)
	and (@DeXuat_SoLuong is null or DeXuat_SoLuong = @DeXuat_SoLuong)
	and DeXuat_TrangThai != 'X'
	and Lx.Ma = Dx.DeXuat_MaLoaiXe
end

go

create proc BANGGIA_Group4Search
@Ma int = NULL,
@BangGia_MaDeXuat int = NULL,
@BangGia_ChuThau nvarchar(50) = NULL,
@BangGia_Gia int = NULL
as

begin
	select *
	from DeXuat_BangGia
	where (@Ma is null or Ma = @Ma)
	and (@BangGia_MaDeXuat is null or DeXuatBangGia_MaDeXuat = @BangGia_MaDeXuat)
	and (@BangGia_ChuThau is null or @BangGia_ChuThau = '' or DeXuatBangGia_ChuThau like '%' + @BangGia_ChuThau + '%' )
	and (@BangGia_Gia is null or DeXuatBangGia_Gia = @BangGia_Gia)
end
