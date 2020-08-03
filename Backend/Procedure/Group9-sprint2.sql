create proc [dbo].[LOAIXE_Group9Insert]
@LoaiXe_Ten nvarchar(50) NULL ,
@LoaiXe_Hang nvarchar(50) NULL ,
@LoaiXe_DinhMucNhienLieu float NULL ,
@LoaiXe_NamSX int NULL ,
@LoaiXe_SoLuong int NULL ,
@LoaiXe_TrangThai varchar(1) NULL ,
@LoaiXe_NgayTao datetime NULL ,
@LoaiXe_NguoiTao  nvarchar(50) NULL ,
@LoaiXe_LoaiNhienLieu varchar(1) NULL 
as

if(exists(select * from LoaiXe where LoaiXe_Ten = @LoaiXe_Ten and LoaiXe_NamSX = @LoaiXe_NamSX))
begin
	select '1' as Result, N'Tên loại xe và năm sản xuất đã tồn tại trong hệ thống' as ErrorDesc
	return
end
else

begin transaction
begin try

	INSERT INTO [dbo].[LoaiXe]
           ([LoaiXe_Ten]
           ,[LoaiXe_Hang]
           ,[LoaiXe_DinhMucNhienLieu]
           ,[LoaiXe_NamSX]
           ,[LoaiXe_SoLuong]
           ,[LoaiXe_TrangThai]
           ,[LoaiXe_NgayTao]
		   ,[LoaiXe_NguoiTao]
           ,[LoaiXe_LoaiNhienLieu])

     VALUES
           (@LoaiXe_Ten
           ,@LoaiXe_Hang
           ,@LoaiXe_DinhMucNhienLieu
           ,@LoaiXe_NamSX
           ,0
           ,'N'
           ,GETDATE()
           ,@LoaiXe_NguoiTao
           ,@LoaiXe_LoaiNhienLieu)
	declare @ma int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @ma as Ma
end try
begin catch

rollback transaction

end catch
