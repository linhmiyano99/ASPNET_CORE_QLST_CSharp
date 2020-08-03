create table HoatDongTaiXe(
	[Ma] [int] IDENTITY(1,1) NOT NULL,
	[HoatDongTaiXe_Ma] varchar(20) NULL,
	[HoatDongTaiXe_MaLichTrinh] varchar(20) NULL,
	[HoatDongTaiXe_MaXe] [int] NULL,
	[HoatDongTaiXe_MaTaiXe] [int] NULL,
	[HoatDongTaiXe_KmThucTe] [float] NULL,
	[HoatDongTaiXe_TrangThai] [varchar](1) NULL,
	[HoatDongTaiXe_NguoiTao] [nvarchar](50) NULL,
	[HoatDongTaiXe_NgayTao] [datetime] NULL,
	[HoatDongTaiXe_NhienLieu] [float] NULL,
	[HoatDongTaiXe_KmUocTinh] [float] NULL,
	[HoatDongTaiXe_NgayBatDau] [datetime] NULL,
	[HoatDongTaiXe_NgayKetThuc] [datetime] NULL,
	[HoatDongTaiXe_NguoiDuyet]      varchar(15) NULL,
	[HoatDongTaiXe_NgayDuyet]      datetime NULL 
)
go
-------------------[dbo].[HOATDONGTAIXE_Insert] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9Insert]
@HoatDongTaiXe_Ma varchar(20) NULL,
@HoatDongTaiXe_MaLichTrinh varchar(20) null,
@HoatDongTaiXe_MaXe [int] NULL,
@HoatDongTaiXe_MaTaiXe [int] NULL,
@HoatDongTaiXe_KmThucTe float null,
@HoatDongTaiXe_TrangThai varchar(1) NULL ,
@HoatDongTaiXe_NguoiTao  nvarchar(50) NULL ,
@HoatDongTaiXe_NgayTao   datetime NULL ,
@HoatDongTaiXe_NhienLieu float null,
@HoatDongTaiXe_KmUocTinh float null,
@HoatDongTaiXe_NgayBatDau [datetime] null,
@HoatDongTaiXe_NgayKetThuc [datetime] null,
@HoatDongTaiXe_NguoiDuyet      varchar(15) NULL,
@HoatDongTaiXe_NgayDuyet      datetime NULL 
as

if(exists(select * from HoatDongTaiXe where HoatDongTaiXe_MaLichTrinh= @HoatDongTaiXe_MaLichTrinh and HoatDongTaiXe_TrangThai = 'N'))
begin
	select '1' as Result, N'Hoạt động đã tồn tại trong hệ thống' as ErrorDesc
	return
end
else

begin transaction
begin try
	declare @Ma int = SCOPE_IDENTITY()

	INSERT INTO [dbo].[HoatDongTaiXe]
    ( 
	[HoatDongTaiXe_Ma],
	[HoatDongTaiXe_MaLichTrinh],
	[HoatDongTaiXe_MaXe],
	[HoatDongTaiXe_MaTaiXe],
[HoatDongTaiXe_KmThucTe],
[HoatDongTaiXe_TrangThai] ,
[HoatDongTaiXe_NguoiTao]  ,
[HoatDongTaiXe_NgayTao]   ,
[HoatDongTaiXe_NhienLieu] ,
[HoatDongTaiXe_KmUocTinh],
[HoatDongTaiXe_NgayBatDau] ,
[HoatDongTaiXe_NgayKetThuc],
[HoatDongTaiXe_NguoiDuyet] ,
[HoatDongTaiXe_NgayDuyet])
	VALUES(   
	@HoatDongTaiXe_Ma,
@HoatDongTaiXe_MaLichTrinh,
@HoatDongTaiXe_MaXe,
@HoatDongTaiXe_MaTaiXe,
@HoatDongTaiXe_KmThucTe,
'N',
@HoatDongTaiXe_NguoiTao,
GETDATE(),
@HoatDongTaiXe_NhienLieu,
@HoatDongTaiXe_KmUocTinh,
@HoatDongTaiXe_NgayBatDau ,
@HoatDongTaiXe_NgayKetThuc,
@HoatDongTaiXe_NguoiDuyet ,
@HoatDongTaiXe_NgayDuyet)
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
-------------------[dbo].[HOATDONGTAIXE_Update] 6/27/2020----------------

create or alter proc [dbo].[HOATDONGTAIXE_Group9Update]
    @Ma int = NULL,
@HoatDongTaiXe_Ma varchar(20) NULL,
@HoatDongTaiXe_MaLichTrinh varchar(20) null,
@HoatDongTaiXe_MaXe [int] null,
@HoatDongTaiXe_MaTaiXe [int] NULL,
@HoatDongTaiXe_KmThucTe float null,
@HoatDongTaiXe_TrangThai varchar(1) NULL ,
@HoatDongTaiXe_NguoiTao  nvarchar(50) NULL ,
@HoatDongTaiXe_NgayTao   datetime NULL ,
@HoatDongTaiXe_NhienLieu float null,
@HoatDongTaiXe_KmUocTinh float null,
@HoatDongTaiXe_NgayBatDau datetime null,
@HoatDongTaiXe_NgayKetThuc datetime null,
@HoatDongTaiXe_NguoiDuyet varchar(15) NULL,
@HoatDongTaiXe_NgayDuyet datetime NULL 

as

if(not exists(select * from HoatDongTaiXe where Ma = @Ma))
begin
	select '1' as Result, N'Hoạt động không tồn tại trong hệ thống' as ErrorDesc
	RETURN
end
begin transaction
begin try

	UPDATE [dbo].[HoatDongTaiXe]
	   SET[HoatDongTaiXe_Ma] = @HoatDongTaiXe_Ma, 
	   [HoatDongTaiXe_MaLichTrinh]= @HoatDongTaiXe_MaLichTrinh,
	   [HoatDongTaiXe_MaXe] = @HoatDongTaiXe_MaXe,
	   [HoatDongTaiXe_MaTaiXe]= @HoatDongTaiXe_MaTaiXe,
	   [HoatDongTaiXe_KmThucTe]= @HoatDongTaiXe_KmThucTe,
[HoatDongTaiXe_TrangThai] = 'N',
[HoatDongTaiXe_NguoiTao] = @HoatDongTaiXe_NguoiTao,
[HoatDongTaiXe_NgayTao]= @HoatDongTaiXe_NgayTao,
[HoatDongTaiXe_NhienLieu] = @HoatDongTaiXe_NhienLieu,
[HoatDongTaiXe_KmUocTinh] = @HoatDongTaiXe_KmUocTinh,
[HoatDongTaiXe_NgayBatDau] = @HoatDongTaiXe_NgayBatDau,
[HoatDongTaiXe_NgayKetThuc] = @HoatDongTaiXe_NgayKetThuc,
[HoatDongTaiXe_NguoiDuyet] = @HoatDongTaiXe_NguoiDuyet,
[HoatDongTaiXe_NgayDuyet] = @HoatDongTaiXe_NgayDuyet

	WHERE Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go

-------------------[dbo].[HOATDONGTAIXEBaoTri_ById] 6/27/2020----------------

create or alter proc [dbo].[HOATDONGTAIXE_Group9ById]
    @Ma int = NULL
as
begin
select *
from HoatDongTaiXe
where Ma = @Ma and HoatDongTaiXe_TrangThai = 'N'
end
go
-------------------[dbo].[HOATDONGTAIXE_SearchAll] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9SearchAll]
as
begin
select *
from HoatDongTaiXe
where HoatDongTaiXe_TrangThai = 'N'
end
go
-------------------[dbo].[HOATDONGTAIXE_Search] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9Search] 
    @Ma int = NULL,
	@HoatDongTaiXe_Ma varchar(20) NULL,
     @HoatDongTaiXe_MaLichTrinh int null,
	 @HoatDongTaiXe_MaXe int null,
	 	 @HoatDongTaiXe_MaTaiXe int null,
@HoatDongTaiXe_KmThucTe float null,
@HoatDongTaiXe_TrangThai varchar(1) NULL ,
@HoatDongTaiXe_NguoiTao  nvarchar(50) NULL ,
@HoatDongTaiXe_NgayTao   datetime NULL ,
@HoatDongTaiXe_NhienLieu float null,
@HoatDongTaiXe_KmUocTinh float null,
@HoatDongTaiXe_NgayBatDau datetime null,
@HoatDongTaiXe_NgayKetThuc datetime null,
@HoatDongTaiXe_NguoiDuyet  varchar(15) NULL,
@HoatDongTaiXe_NgayDuyet datetime null


as
begin
	select * from HoatDongTaiXe
	where (@Ma is null or Ma = @Ma)
	and (@HoatDongTaiXe_Ma is null or HoatDongTaiXe_Ma= @HoatDongTaiXe_Ma)
	and (@HoatDongTaiXe_MaLichTrinh is null or HoatDongTaiXe_MaLichTrinh= @HoatDongTaiXe_MaLichTrinh)
	and (@HoatDongTaiXe_MaXe is null or HoatDongTaiXe_MaXe= @HoatDongTaiXe_MaXe)
	and (@HoatDongTaiXe_MaTaiXe is null or HoatDongTaiXe_MaTaiXe= @HoatDongTaiXe_MaTaiXe)
	and (@HoatDongTaiXe_KmThucTe is null or HoatDongTaiXe_KmThucTe = @HoatDongTaiXe_KmThucTe)
	and (HoatDongTaiXe_TrangThai  = 'N')
	and (@HoatDongTaiXe_NguoiTao  is null or HoatDongTaiXe_NguoiTao = @HoatDongTaiXe_NguoiTao)
	and (@HoatDongTaiXe_NgayTao is null or HoatDongTaiXe_NgayTao = @HoatDongTaiXe_NgayTao)
	and (@HoatDongTaiXe_NhienLieu is null or HoatDongTaiXe_NhienLieu = @HoatDongTaiXe_NhienLieu)
	and (@HoatDongTaiXe_KmUocTinh is null or HoatDongTaiXe_KmUocTinh = @HoatDongTaiXe_KmUocTinh)
	and (@HoatDongTaiXe_NgayBatDau is null or HoatDongTaiXe_NgayBatDau >= @HoatDongTaiXe_NgayBatDau)
	and (@HoatDongTaiXe_NgayKetThuc is null or HoatDongTaiXe_NgayKetThuc <= @HoatDongTaiXe_NgayKetThuc)
	and (@HoatDongTaiXe_NguoiDuyet is null or HoatDongTaiXe_NguoiDuyet = @HoatDongTaiXe_NguoiDuyet)
	and (@HoatDongTaiXe_NgayDuyet is null or HoatDongTaiXe_NgayDuyet = @HoatDongTaiXe_NgayDuyet)


end
go
-------------------[dbo].[HOATDONGTAIXE_Delete] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9Delete] @Ma int = NULL
as

if(exists(select * from HoatDongTaiXe where HoatDongTaiXe.Ma = @Ma and HoatDongTaiXe_TrangThai = 'A' ))
begin
	select '1' as Result, N'Đã duyệt không được xóa' as ErrorDesc
	return
end

begin transaction
begin try
	update HoatDongTaiXe set HoatDongTaiXe_TrangThai = 'X' where Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
-------------------[dbo].[HOATDONGTAIXE_Tracking] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9Tracking]
@MaTaiXe int = NULL,
@MaLichTrinh int = NULL,
@HoatDongTaiXe_TuNgay   datetime   NULL ,
@HoatDongTaiXe_DenNgay   datetime = NULL 
as
begin
	select * from HoatDongTaiXe
	where (@MaLichTrinh is null or HoatDongTaiXe_MaLichTrinh = @MaLichTrinh)
		and (@MaTaiXe is null or HoatDongTaiXe_MaTaiXe = @MaTaiXe)
	and (@HoatDongTaiXe_TuNgay is null or HoatDongTaiXe_NgayBatDau >= @HoatDongTaiXe_TuNgay)
	and (@HoatDongTaiXe_DenNgay is null or HoatDongTaiXe_NgayKetThuc <= @HoatDongTaiXe_DenNgay)

end
go
-----

-------------------[dbo].[HOATDONGTAIXE_Tracking] 6/27/2020----------------
create or alter proc [dbo].[HOATDONGTAIXE_Group9SearchAllLichTrinh]
as
begin
	select * from LichTrinh
	where LichTrinh_TrangThai = 'N' 
	and LichTrinh_NgayDi is not null 
	and LichTrinh_NgayDen is not null 
	and Ma in (select HoatDongTaiXe_MaLichTrinh from HoatDongTaiXe)
end
go

create or alter proc [dbo].[HOATDONGTAIXE_Group9SearchAllNewLichTrinh]
as
begin
	select * from LichTrinh
	where LichTrinh_TrangThai = 'N' 
	and LichTrinh_NgayDi is not null 
	and LichTrinh_NgayDen is not null 
	and  not exists (select HoatDongTaiXe_MaLichTrinh from HoatDongTaiXe where LichTrinh.Ma = HoatDongTaiXe.HoatDongTaiXe_MaLichTrinh)
end
go


ALTER   proc [dbo].[HOATDONGTAIXE_Group9SearchByIdLichTrinh]
@Ma int = NULL
as
begin
	select LichTrinh.*, TuyenChay.TuyenChay_SoKm from LichTrinh, TuyenChay
	where LichTrinh.Ma = @Ma and LichTrinh_TrangThai = 'N' and LichTrinh_NgayDi is not null and LichTrinh_NgayDen is not null
	and TuyenChay.Ma = LichTrinh.LichTrinh_MaTuyenChay
end

create or alter proc [dbo].[HOATDONGTAIXE_Group9SearchLichTrinh]
@Ma int = NULL,
@LichTrinh_NgayDi datetime = NULL,
@LichTrinh_NgayDen datetime = NULL,
@LichTrinh_MaTuyenChay int = NULL,
@LichTrinh_MaTaiXe int = NULL,
@LichTrinh_MaXe int = NULL,
@LichTrinh_TrangThaiChuyen varchar(1) = NULL,
@LichTrinh_NgayTao datetime = NULL,
@LichTrinh_NguoiTao nvarchar(max) NULL,
@LichTrinh_TrangThai varchar(1) NULL

as
begin
	select * 
	from LichTrinh
	where (@Ma is null or Ma = @Ma)
	and (@LichTrinh_NgayDi is null or LichTrinh_NgayDi >= @LichTrinh_NgayDi)
	and (@LichTrinh_NgayDen is null or LichTrinh_NgayDen <= @LichTrinh_NgayDen)
	and (@LichTrinh_MaTuyenChay is null or LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay)
	and (@LichTrinh_MaTaiXe is null or LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe)
	and (@LichTrinh_MaXe is null or LichTrinh_MaXe = @LichTrinh_MaXe)
	and (@LichTrinh_TrangThaiChuyen is null or LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen)
	and (@LichTrinh_NgayTao is null or LichTrinh_NgayTao = @LichTrinh_NgayTao)
	and (@LichTrinh_NguoiTao is null or LichTrinh_NguoiTao = @LichTrinh_NguoiTao)
	and (LichTrinh_TrangThai = 'N')

end
go

create or alter proc [dbo].[HOATDONGTAIXE_Group9SearchAllTaiXe]
as
begin
	select distinct TaiXe.Ma, TaiXe.TaiXe_Hoten, TaiXe.TaiXe_HangBangLai, TaiXe.TaiXe_TenNguoiDung
	from TaiXe, LichTrinh, HoatDongTaiXe
	where not(TaiXe.Ma = LichTrinh.LichTrinh_MaTaiXe  
	and HoatDongTaiXe.HoatDongTaiXe_MaLichTrinh = LichTrinh.Ma)
	end
go

create or alter proc [dbo].[HOATDONGTAIXE_Group9App]
@Id int = NULL,@CheckerId varchar(15)
as
begin transaction
begin try
begin
	update HoatDongTaiXe 
	set HoatDongTaiXe_TrangThai = 'A', HoatDongTaiXe_NguoiDuyet = @CheckerId, HoatDongTaiXe_NgayDuyet = GETDATE()
	where HoatDongTaiXe.Ma = @Id
end
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as Ma
end try
begin catch

rollback transaction

end catch
go



exec [dbo].[HOATDONGTAIXE_Group9SearchAllMaTaiXe]

select * from HoatDongTaiXe
-----
exec [HOATDONGTAIXE_Group9Tracking] null, null, '2018-01-01 00:00:00.000', '2028-01-01 00:00:00.000'
exec HOATDONGTAIXE_Group9SearchAllLichTrinh
exec HOATDONGTAIXE_Group9InsertLichTrinh '2019-01-01 00:00:00.000', '2019-01-01 00:00:00.000', null, null, 'C', '2019-01-01 00:00:00.000', 'admin', 'N'

exec [HOATDONGTAIXE_Group9SearchLichTrinh] 7, '2018-01-01 00:00:00.000', null,null, null, null,null,null, null, null
exec [HOATDONGTAIXE_Group9SearchLichTrinh] null,null,null,null,null,null,null,null,null, null

exec [HOATDONGTAIXE_Group9SearchAllNewLichTrinh]

select * from TaiXe


