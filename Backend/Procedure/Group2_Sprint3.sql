USE [DbPratice]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--Them
create or ALTER Proc TAIXE_Group2Insert
@TaiXe_HoTen nvarchar(50) = null,
@TaiXe_HangBangLai varchar(10) = null,
@TaiXe_NgayBatDauLam datetime = null,
@TaiXe_MucLuong bigint = null,
@TaiXe_UrlAnh nvarchar(max) = null,
@TaiXe_UrlThongTin nvarchar(max) = null,
@TaiXe_NguoiTao nvarchar(50) = null,
@TaiXe_TenNguoiDung nvarchar(max)
as

if(exists(select * from TaiXe where TaiXe.TaiXe_HoTen = @TaiXe_HoTen))
	begin
		select '1' as Result, N'Tài xế này đã có trong hệ thống' as ErrorDesc
		RETURN
	end
else

begin transaction
begin try
	insert into HopDong
		(HopDong_NgayBatDauLam,
		HopDong_MucLuong,
		HopDong_TrangThai,
		HopDong_NgayTao,
		HopDong_NgayDongBaoHiem,
		HopDong_NguoiTao)
	values
		(@TaiXe_NgayBatDauLam,
		@TaiXe_MucLuong,
		'N',
		GETDATE(),
		GETDATE(),
		@TaiXe_NguoiTao)
	declare @MaHopDong int = scope_identity()
	insert into TaiXe
		(TaiXe_HoTen,
		TaiXe_HangBangLai,
		TaiXe_MaHopDong,
		TaiXe_TrangThaiLamViec,
		TaiXe_NgayTao,
		TaiXe_UrlAnh,
		TaiXe_UrlThongTin,
		TaiXe_NguoiTao,
		TaiXe_TenNguoiDung)
	values
		(@TaiXe_HoTen,
		@TaiXe_HangBangLai,
		@MaHopDong,
		'D',
		getdate(),
		@TaiXe_UrlAnh,
		@TaiXe_UrlThongTin,
		@TaiXe_NguoiTao,
		@TaiXe_TenNguoiDung)
	declare @ma int = scope_identity()
commit transaction
	select '0' as Result, N'Thêm thông tin tài xế thành công' as ErrorDesc, @ma as Ma
end try
begin catch
rollback transaction
end catch
go
--Search
create or alter proc TAIXE_Group2Search
@TaiXe_Ma int = null,
@TaiXe_HoTen nvarchar(50) = null,
@TaiXe_TrangThaiLamViec nvarchar(50) = null,
@TaiXe_HangBangLai varchar(10) = null,
@TaiXe_NgayBatDauLam datetime = null,
@TaiXe_MucLuongNho bigint = null,
@TaiXe_MucLuongLon bigint =null
as
begin
	select  TX.Ma, TX.TaiXe_HoTen, TX.TaiXe_TrangThaiLamViec, TX.TaiXe_HangBangLai, HD.HopDong_MucLuong, HD.HopDong_NgayBatDauLam
	from TaiXe TX inner join HopDong HD
	on Tx.TaiXe_MaHopDong = HD.Ma
	where
	(@TaiXe_Ma is null or TX.Ma = @TaiXe_Ma) and
	(@TaiXe_HoTen is null or @TaiXe_HoTen = '' or TX.TaiXe_HoTen like '%' + @TaiXe_HoTen + '%') and
	(@TaiXe_TrangThaiLamViec is null or @TaiXe_TrangThaiLamViec = '' or TX.TaiXe_TrangThaiLamViec like '%' + @TaiXe_TrangThaiLamViec + '%') and
	(@TaiXe_HangBangLai is null or @TaiXe_HangBangLai = '' or TX.TaiXe_HangBangLai = @TaiXe_HangBangLai) and
	(@TaiXe_NgayBatDauLam is null or HD.HopDong_NgayBatDauLam = @TaiXe_NgayBatDauLam) and
	(@TaiXe_MucLuongNho is null or HD.HopDong_MucLuong >= @TaiXe_MucLuongNho) and
	(@TaiXe_MucLuongLon is null or HD.HopDong_MucLuong <= @TaiXe_MucLuongLon)
end
Go
---Edit
CREATE or ALTER Proc TAIXE_Group2Update
@Ma int = null,
@TaiXe_HoTen nvarchar(50) = null,
@TaiXe_NgayDongBaoHiem datetime = null,
@TaiXe_NgayHetHanBaoHiem datetime = null,
@TaiXe_MucLuong bigint = null,
@TaiXe_UrlThongtin nvarchar(max) = null
as

begin transaction
begin try

	UPDATE TaiXe
	   SET TaiXe_HoTen = @TaiXe_HoTen,
			TaiXe_UrlThongTin = @TaiXe_UrlThongtin
	WHERE Ma = @Ma

	Update HopDong
	Set HopDong_NgayDongBaoHiem = @TaiXe_NgayDongBaoHiem,
		HopDong_NgayHetHan = @TaiXe_NgayHetHanBaoHiem,
		HopDong_MucLuong = @TaiXe_MucLuong
	From TaiXe TX inner join HopDong HD
	On (TX.TaiXe_MaHopDong = HD.Ma)
	Where TX.Ma = @Ma
commit transaction
	select '0' as Result, N'Đã Update thông tin' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
--Xoa
create or alter proc TAIXE_Group2Del
	@Ma int = NULL
as
begin transaction
begin try
	update TaiXe
	set TaiXe_TrangThaiLamViec = 'N'
	where Ma = @Ma

	update HopDong
	set HopDong_TrangThai = 'X'
	from TaiXe TX inner join HopDong HD
	on TX.TaiXe_MaHopDong = HD.Ma
	where TX.Ma = @Ma

commit transaction
	select '0' as Result, N'Đã xóa!' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
--Search by ID
create or alter proc TAIXE_Group2SearchById
@TaiXe_Ma int = null
as
begin
	select  TX.ma, TX.TaiXe_HoTen, TX.TaiXe_HangBangLai, TX.TaiXe_TrangThaiLamViec, TX.TaiXe_MaHopDong, HD.HopDong_NgayBatDauLam, HD.HopDong_MucLuong, HD.HopDong_NgayHetHan, HD.HopDong_NgayDongBaoHiem, HD.HopDong_TrangThai
	from TaiXe TX inner join HopDong HD
	on Tx.TaiXe_MaHopDong = HD.Ma
	where
	(@TaiXe_Ma is null or TX.Ma = @TaiXe_Ma) and
	(HD.HopDong_TrangThai != 'X') and (TX.TaiXe_TrangThaiLamViec != 'N')
end
Go
--Quick Edit
CREATE or ALTER Proc TAIXE_Group2QuickUpdate
@Ma int = null,
@TaiXe_HangBangLai varchar(10) = null,
@TaiXe_TrangThaiLamViec nvarchar(50)
as

begin transaction
begin try

	UPDATE TaiXe
	SET TaiXe_HangBangLai = @TaiXe_HangBangLai,
		TaiXe_TrangThaiLamViec = @TaiXe_TrangThaiLamViec
	WHERE Ma = @Ma
	
	update HopDong
	set HopDong_TrangThai = 'X'
	from TaiXe TX inner join HopDong HD
	on TX.TaiXe_MaHopDong = HD.Ma
	where TX.Ma = @Ma and @TaiXe_TrangThaiLamViec = 'N'
	
	update HopDong
	set HopDong_TrangThai = 'N'
	from TaiXe TX inner join HopDong HD
	on TX.TaiXe_MaHopDong = HD.Ma
	where TX.Ma = @Ma and @TaiXe_TrangThaiLamViec = 'D'

commit transaction
	select '0' as Result, N'Đã Update thông tin' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
