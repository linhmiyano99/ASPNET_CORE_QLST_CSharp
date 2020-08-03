USE DbPratice
Go
create PROC TUYENCHAY_Group4Insert 
@TuyenChay_Ten nvarchar(50) = NULL
,@TuyenChay_DiemDen nvarchar(max) = NULL
,@TuyenChay_DiemDi nvarchar(max) = NULL
,@TuyenChay_SoKm nvarchar(50) = NULL
,@TuyenChay_NguoiTao nvarchar(50) = NULL
AS
if(exists(select TuyenChay_Ten from TuyenChay where TuyenChay_Ten = @TuyenChay_Ten and TuyenChay_TrangThai = 'N'))
begin
	select '1' as Result, N'Đã có tuyến chạy với tên này trong hệ thống' as ErrorDesc
	RETURN
end

if(exists(select TuyenChay_DiemDen, TuyenChay_DiemDi from TuyenChay where TuyenChay_DiemDen = @TuyenChay_DiemDen 
and TuyenChay_DiemDi = @TuyenChay_DiemDi and TuyenChay_TrangThai = 'N'))
begin
	select '1' as Result, N'Đã có tuyến chạy này trong hệ thống' as ErrorDesc
	RETURN
end

begin transaction
begin try
	INSERT INTO 
	TuyenChay(TuyenChay_Ten, 
	TuyenChay_DiemDen, 
	TuyenChay_DiemDi, 
	TuyenChay_SoKm, 
	TuyenChay_NguoiTao, 
	TuyenChay_NgayTao, 
	TuyenChay_TrangThai) 
	VALUES 
	(@TuyenChay_Ten,
	@TuyenChay_DiemDen, 
	@TuyenChay_DiemDi,
	@TuyenChay_SoKm,
	@TuyenChay_NguoiTao,
	GETDATE(),
	'N')
	declare @Ma int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch

GO 

CREATE proc TUYENCHAY_Group4Search
@Ma int = NULL,
@TuyenChay_Ten nvarchar(50) = NULL,
@TuyenChay_DiemDen nvarchar(max) = NULL,
@TuyenChay_DiemDi nvarchar(max) = NULL,
@TuyenChay_SoKm nvarchar(50) = NULL
as
begin
	select * from TuyenChay where
	(@TuyenChay_Ten is NULL or @TuyenChay_Ten = '' or TuyenChay_Ten Like '%' + @TuyenChay_Ten + '%')
	and (@TuyenChay_DiemDen is NULL or @TuyenChay_DiemDen = '' or TuyenChay_DiemDen Like '%' + @TuyenChay_DiemDen + '%')
	and (@TuyenChay_DiemDi is NULL or @TuyenChay_DiemDi = '' or TuyenChay_DiemDi Like '%' + @TuyenChay_DiemDi + '%')
	and (@TuyenChay_SoKm is NULL or @TuyenChay_SoKm = '' or TuyenChay_SoKm Like '%' + @TuyenChay_SoKm + '%')
	and (@Ma is NULL or Ma = @Ma)
	and TuyenChay_TrangThai != 'X'
end

GO

Create proc LICHTRINH_Group4Insert
@LichTrinh_NgayDi datetime = NULL,
@LichTrinh_NgayDen datetime = NULL,
@LichTrinh_MaTuyenChay int = NULL,
@LichTrinh_MaTaiXe int = NULL,
@LichTrinh_NguoiTao nvarchar(50) = NULL
as
if(GETDATE() >= CONVERT(datetime, @LichTrinh_NgayDi))
begin
	select '1' as Result, N'Thời gian đi phải lớn hơn thời gian hiện tại' as ErrorDesc
	return
end

if(CONVERT(datetime, @LichTrinh_NgayDen) <= CONVERT(datetime, @LichTrinh_NgayDi))
begin
	select '1' as Result, N'Thời gian đến không được bé hơn thời gian đi' as ErrorDesc
	return
end
if(not exists(select * from TuyenChay where Ma = @LichTrinh_MaTuyenChay and TuyenChay_TrangThai = 'N'))
begin
	select '1' as Result, N'Tuyến chạy không tồn tại' as ErrorDesc
	return
end

if(not exists(select * from TaiXe where Ma = @LichTrinh_MaTaiXe and TaiXe_TrangThaiLamViec = 'D'))
begin
	select '1' as Result, N'Tài xế không tồn tại hoặc đã nghỉ vệc' as ErrorDesc
	return
end

if(exists(select * from LichTrinh where LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay
 and LichTrinh_MaTaiXe != @LichTrinh_MaTaiXe and 
 (LichTrinh_TrangThaiChuyen = 'C') or (LichTrinh_TrangThaiChuyen = 'D')))
begin
	select '1' as Result, N'Tuyến chạy đã có tài xế khác chạy' as ErrorDesc
	return
end

begin transaction
begin try
	
INSERT INTO [dbo].[LichTrinh]
           ([LichTrinh_NgayDi]
           ,[LichTrinh_NgayDen]
           ,[LichTrinh_MaTuyenChay]
           ,[LichTrinh_MaTaiXe]
           ,[LichTrinh_TrangThaiChuyen]
           ,[LichTrinh_NgayTao]
           ,[LichTrinh_NguoiTao]
           ,[LichTrinh_TrangThai])
VALUES(
	@LichTrinh_NgayDi,
	@LichTrinh_NgayDen,
	@LichTrinh_MaTuyenChay,
	@LichTrinh_MaTaiXe,
	'C',
	GETDATE(),
	@LichTrinh_NguoiTao,
	'N')
	declare @Ma int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch


GO

Create proc LICHTRINH_Group4Search
@Ma int = NULL,
@LichTrinh_MaTuyenChay int = NULL,
@LichTrinh_MaTaiXe int = NULL,
@LichTrinh_TrangThaiChuyen varchar(1) = NULL,
@LichTrinh_NgayDi datetime = NULL,
@LichTrinh_NgayDen datetime = NULL
as
begin

if(@LichTrinh_NgayDen is not NULL and @LichTrinh_NgayDi is not NULL)
begin
	SELECT LichTrinh.Ma , LichTrinh_NgayDi, LichTrinh_NgayDen, LichTrinh_TrangThaiChuyen, LichTrinh_TrangThai,
	TaiXe.TaiXe_HoTen, TuyenChay.TuyenChay_DiemDi, TuyenChay.TuyenChay_DiemDen, TuyenChay.TuyenChay_SoKm
	FROM [dbo].[LichTrinh], TaiXe, TuyenChay
	WHERE
	(LichTrinh_NgayDi >= @LichTrinh_NgayDi)
	and (LichTrinh_NgayDen <= @LichTrinh_NgayDen)
	and (@LichTrinh_MaTaiXe is NULL or LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe)
	and (@LichTrinh_MaTuyenChay is NULL or LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay)
	and (@LichTrinh_TrangThaiChuyen is NULL or @LichTrinh_TrangThaiChuyen = '' or LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen)
	and (LichTrinh_TrangThai = 'N')
	and (TaiXe.Ma = LichTrinh_MaTaiXe)
	and (TuyenChay.Ma = LichTrinh_MaTuyenChay)
	and (@Ma is NULL or LichTrinh.Ma = @Ma)
end

else if (@LichTrinh_NgayDen is not NULL and @LichTrinh_NgayDi is NULL)
begin
	SELECT LichTrinh.Ma , LichTrinh_NgayDi, LichTrinh_NgayDen, LichTrinh_TrangThaiChuyen, LichTrinh_TrangThai,
	TaiXe.TaiXe_HoTen, TuyenChay.TuyenChay_DiemDi, TuyenChay.TuyenChay_DiemDen, TuyenChay.TuyenChay_SoKm
	FROM [dbo].[LichTrinh], TaiXe, TuyenChay
	WHERE (LichTrinh_NgayDen <= @LichTrinh_NgayDen)
	and (@LichTrinh_MaTaiXe is NULL or LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe)
	and (@LichTrinh_MaTuyenChay is NULL or LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay)
	and (@LichTrinh_TrangThaiChuyen is NULL or @LichTrinh_TrangThaiChuyen = '' or LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen)
	and (LichTrinh_TrangThai = 'N')
	and (TaiXe.Ma = LichTrinh_MaTaiXe)
	and (TuyenChay.Ma = LichTrinh_MaTuyenChay)
	and (@Ma is NULL or LichTrinh.Ma = @Ma)
end

else if(@LichTrinh_NgayDen is  NULL and @LichTrinh_NgayDi is not NULL)
begin
	SELECT LichTrinh.Ma , LichTrinh_NgayDi, LichTrinh_NgayDen, LichTrinh_TrangThaiChuyen, LichTrinh_TrangThai,
	TaiXe.TaiXe_HoTen, TuyenChay.TuyenChay_DiemDi, TuyenChay.TuyenChay_DiemDen, TuyenChay.TuyenChay_SoKm
	FROM [dbo].[LichTrinh], TaiXe, TuyenChay
	WHERE (LichTrinh_NgayDi >=  @LichTrinh_NgayDi)
	and (@LichTrinh_MaTaiXe is NULL or LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe)
	and (@LichTrinh_MaTuyenChay is NULL or LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay)
	and (@LichTrinh_TrangThaiChuyen is NULL or @LichTrinh_TrangThaiChuyen = '' or LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen)
	and (LichTrinh_TrangThai = 'N')
	and (TaiXe.Ma = LichTrinh_MaTaiXe)
	and (TuyenChay.Ma = LichTrinh_MaTuyenChay)
	and (@Ma is NULL or LichTrinh.Ma = @Ma)
end

else
begin
	SELECT LichTrinh.Ma , LichTrinh_NgayDi, LichTrinh_NgayDen, LichTrinh_TrangThaiChuyen, LichTrinh_TrangThai,
	TaiXe.TaiXe_HoTen, TuyenChay.TuyenChay_DiemDi, TuyenChay.TuyenChay_DiemDen, TuyenChay.TuyenChay_SoKm
	FROM [dbo].[LichTrinh], TaiXe, TuyenChay
	WHERE
	(@LichTrinh_NgayDi is NULL or LichTrinh_NgayDi = @LichTrinh_NgayDi)
	and (@LichTrinh_NgayDen is NULL or LichTrinh_NgayDen = @LichTrinh_NgayDen)
	and (@LichTrinh_MaTaiXe is NULL or LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe)
	and (@LichTrinh_MaTuyenChay is NULL or LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay)
	and (@LichTrinh_TrangThaiChuyen is NULL or @LichTrinh_TrangThaiChuyen = '' or LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen)
	and (LichTrinh_TrangThai = 'N')
	and (TaiXe.Ma = LichTrinh_MaTaiXe)
	and (TuyenChay.Ma = LichTrinh_MaTuyenChay)
	and (@Ma is NULL or LichTrinh.Ma = @Ma)
end

end

Go


Create Proc LICHTRINH_Group4DeleteById  @Ma int = NULL
as
if(exists(select * from LichTrinh where Ma = @Ma and LichTrinh_TrangThaiChuyen = 'D'))
begin
	select '1' as Result, N'Không thể xóa lịch trình đang di chuyển' as ErrorDesc
	return
end
begin transaction
begin try
	update LichTrinh set LichTrinh_TrangThai = 'X' where LichTrinh.Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
GO

alter proc LICHTRINH_Group4Update
@Ma int = NULL,
@LichTrinh_NgayDi datetime = NULL,
@LichTrinh_NgayDen datetime = NULL,
@LichTrinh_MaTuyenChay int = NULL,
@LichTrinh_MaTaiXe int = NULL,
@LichTrinh_NguoiTao nvarchar(50) = NULL,
@LichTrinh_TrangThaiChuyen varchar(1) = NULL
as

if( @LichTrinh_TrangThaiChuyen = 'C'and exists(select * from LichTrinh Where (LichTrinh_TrangThaiChuyen = 'D' or LichTrinh_TrangThaiChuyen = 'K') and Ma = @Ma))
begin
	select '1' as Result, N'Không thể cập nhật lịch trình đang chạy hoặc đã kết thúc về chưa nhận' as ErrorDesc
	return
end

if(GETDATE() >= CONVERT(datetime, @LichTrinh_NgayDi))
begin
	select '1' as Result, N'Thời gian đi phải lớn hơn thời gian hiện tại' as ErrorDesc
	return
end

if(CONVERT(datetime, @LichTrinh_NgayDen) <= CONVERT(datetime, @LichTrinh_NgayDi))
begin
	select '1' as Result, N'Thời gian đến không được bé hơn thời gian đi' as ErrorDesc
	return
end
if(not exists(select * from TuyenChay where Ma = @LichTrinh_MaTuyenChay and TuyenChay_TrangThai = 'N'))
begin
	select '1' as Result, N'Tuyến chạy không tồn tại' as ErrorDesc
	return
end

if(not exists(select * from TaiXe where Ma = @LichTrinh_MaTaiXe and TaiXe_TrangThaiLamViec = 'D'))
begin
	select '1' as Result, N'Tài xế không tồn tại hoặc đã nghỉ vệc' as ErrorDesc
	return
end

if(exists(select * from LichTrinh where LichTrinh_MaTaiXe != @LichTrinh_MaTaiXe and 
 LichTrinh.Ma = @Ma and LichTrinh.LichTrinh_TrangThaiChuyen = 'D'))
begin
	select '1' as Result, N'Tuyến chạy đã có tài xế khác chạy' as ErrorDesc
	return
end

if(exists(select * from LichTrinh where Ma = @Ma and LichTrinh_TrangThai = 'X'))
begin
	select '1' as Result, N'Không được cập nhật lịch trình đã xóa' as ErrorDesc
	return
end

begin transaction
begin try
	
UPDATE LichTrinh
         
SET
	LichTrinh_NgayDi = @LichTrinh_NgayDi,
	LichTrinh_NgayDen = @LichTrinh_NgayDen,
	LichTrinh_MaTuyenChay = @LichTrinh_MaTuyenChay,
	LichTrinh_MaTaiXe = @LichTrinh_MaTaiXe,
	LichTrinh_TrangThaiChuyen = @LichTrinh_TrangThaiChuyen,
	LichTrinh_NgayTao = GETDATE(),
	LichTrinh_NguoiTao = @LichTrinh_NguoiTao
WHERE
	Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch

GO

Create proc LICHTRINH_Group4SearchById
@Ma int = NULL
as
begin
	SELECT LichTrinh.Ma , LichTrinh_NgayDi, LichTrinh_NgayDen, LichTrinh_TrangThaiChuyen, LichTrinh_TrangThai,
	TaiXe.TaiXe_HoTen, TuyenChay.TuyenChay_DiemDi, TuyenChay.TuyenChay_DiemDen, TuyenChay.TuyenChay_SoKm
	FROM [dbo].[LichTrinh]
	LEFT JOIN TaiXe
	ON TaiXe.Ma = LichTrinh.LichTrinh_MaTaiXe
	LEFT JOIN TuyenChay
	ON TuyenChay.Ma = LichTrinh.LichTrinh_MaTuyenChay
	WHERE LichTrinh.Ma = @Ma and LichTrinh.LichTrinh_TrangThai != 'X'
end
