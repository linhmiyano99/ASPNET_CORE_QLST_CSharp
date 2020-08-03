/*tìm phiếu sữa chửa*/
USE DbPratice
GO
CREATE OR ALTER PROC SUACHUA_Group10Search
@Ma int = NULL,
@SuaChua_MaXe int = NULL,
@SuaChua_BienSo varchar(50)=NULL,
@SuaChua_MaTaiXe int = NULL,
@SuaChua_TenTaiXe varchar(50)=NULL
AS
BEGIN
	SELECT SuaChua.*,Xe.Xe_BienSo as 'SuaChua_BienSo',TaiXe.TaiXe_HoTen as 'SuaChua_TenTaiXe'
	FROM SuaChua, Xe,TaiXe
	WHERE SuaChua.SuaChua_MaXe = Xe.Ma and
	(@Ma is NULL or SuaChua.Ma= @Ma) and
	(@SuaChua_MaXe is NULL or @SuaChua_MaXe = '' or SuaChua.SuaChua_MaXe = @SuaChua_MaXe) and
	(@SuaChua_BienSo is NULL or @SuaChua_BienSo = '' or Xe.Xe_BienSo like '%' + @SuaChua_BienSo + '%') and
	(@SuaChua_MaTaiXe is NULL or @SuaChua_MaTaiXe = '' or SuaChua.SuaChua_MaTaiXe = @SuaChua_MaTaiXe) and 
	(@SuaChua_TenTaiXe is NULL or @SuaChua_TenTaiXe = '' or TaiXe.TaiXe_HoTen like '%' +@SuaChua_TenTaiXe + '%') and
	(SuaChua.SuaChua_TrangThaiDuyet != 'T')
END
GO
/*lấy all xe đã có biển số*/
GO
CREATE OR ALTER PROC Xe_Group10GetAllXeCoBienSo
AS
BEGIN
	SELECT *
	FROM Xe
	where (Xe.Xe_BienSo!=NULL or Xe.Xe_BienSo!='')
END
GO
/*lấy tài xế by user name*/
GO
CREATE OR ALTER PROC TaiXe_Group10GetTaiXeByUsername
@TaiXe_TenNguoiDung varchar(50)=NULL
AS
BEGIN
	SELECT *
	FROM TaiXe
	where TaiXe.TaiXe_TenNguoiDung = @TaiXe_TenNguoiDung
END
GO
/*thêm phiếu sửa chửa*/
Go
create or alter Proc SuaChua_Group10Insert
@SuaChua_MaXe int = NULL,
@SuaChua_MaTaiXe int = NULL,
@SuaChua_LyDo nvarchar(50)=NULL,
@SuaChua_ThanhTien bigint = NULL,
@SuaChua_NguoiTao nvarchar(50)=NULL
as
	begin transaction
	begin try
	insert into SuaChua(SuaChua_MaXe,SuaChua_MaTaiXe,SuaChua_LyDo,SuaChua_ThanhTien,SuaChua_NgayTao,SuaChua_NguoiTao,SuaChua_TrangThaiDuyet)
	values(@SuaChua_MaXe,@SuaChua_MaTaiXe,@SuaChua_LyDo,@SuaChua_ThanhTien,GETDATE(),@SuaChua_NguoiTao,'N')
	declare @id int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch
rollback transaction
end catch
Go

/*sửa phiếu sửa chửa*/
Go
create or alter Proc SuaChua_Group10Update
@Ma int = null,
@SuaChua_LyDo nvarchar(50)=NULL,
@SuaChua_ThanhTien bigint = NULL
as
if(not exists(select * from SuaChua where Ma = @Ma))
begin
	select '1' as Result, N'Dữ liệu không tồn tại trong hệ thống' as ErrorDesc
	RETURN
end
begin transaction
begin try
	update SuaChua set SuaChua_LyDo = @SuaChua_LyDo, SuaChua_ThanhTien = @SuaChua_ThanhTien ,SuaChua_TrangThaiDuyet = 'N'  where Ma = @Ma
	declare @id int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch
rollback transaction
end catch
Go

/*xóa phiếu sửa chửa*/

GO
CREATE OR ALTER PROC SuaChua_Group10Delete
@Ma INT = NULL
AS
IF(EXISTS(SELECT * FROM SuaChua WHERE SuaChua.Ma = @Ma and SuaChua.SuaChua_TrangThai = 'D'))
BEGIN
	SELECT '1' AS Result, N'Xe đang sửa chửa không thể xóa' AS ErrorDesc
	RETURN
END

BEGIN TRANSACTION
BEGIN TRY
	delete from SuaChua where SuaChua.Ma = @Ma
COMMIT TRANSACTION
	SELECT '0' AS Result, N'' AS ErrorDesc, @Ma as Ma
END TRY
BEGIN CATCH

ROLLBACK TRANSACTION

END CATCH

/*duyệt phiếu sửa chửa*/
GO
SET QUOTED_IDENTIFIER ON
GO
create or alter Proc SuaChua_Group10Approve
 @Ma int = NULL,
 @SuaChua_NguoiDuyet varchar(15)
as
begin transaction
begin try
	update SuaChua 
	set SuaChua_TrangThaiDuyet = 'D', SuaChua_NgayDuyet = GETDATE(), SuaChua_NguoiDuyet = @SuaChua_NguoiDuyet, SuaChua_TrangThai = 'C'
	where Ma = @Ma
commit transaction
	if(exists(select * from SuaChua where Ma = @Ma and SuaChua_TrangThaiDuyet != 'D'))
		begin
			select '1' as Result, N'Duyệt thất bại' as ErrorDesc
			RETURN
		end
	else
	 select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch

rollback transaction

end catch
GO

/*từ chối phiếu sửa chửa*/
GO
SET QUOTED_IDENTIFIER ON
GO
create or alter Proc SuaChua_Group10Refuse
 @Ma int = NULL,
 @SuaChua_NguoiDuyet varchar(15)
as
begin transaction
begin try
	update SuaChua 
	set SuaChua_TrangThaiDuyet = 'T', SuaChua_NgayDuyet = GETDATE(), SuaChua_NguoiDuyet = @SuaChua_NguoiDuyet
	where Ma = @Ma
commit transaction
	if(exists(select * from SuaChua where Ma = @Ma and SuaChua_TrangThaiDuyet != 'T'))
		begin
			select '1' as Result, N'Từ chối thất bại' as ErrorDesc
			RETURN
		end
	else
		select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch

rollback transaction

end catch
GO