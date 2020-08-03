/*proc insert*/
Go
create or alter Proc [dbo].[Xe_Group10Insert]
@xe_MaLoaiXe int = NULL,
@xe_Ten varchar(50)=NULL,
@xe_BienSo nvarchar(50)=NULL,
@xe_Gia bigint = NULL,
@xe_Mau varchar(50)=NULL,
@soLuong int =0,
@xe_NguoiTao varchar(50)=NULL
as

if(@SoLuong = 1 and  exists(select * from Xe where Xe.Xe_BienSo = @xe_BienSo))
	begin
		select '1' as Result, N'Xe có biển số này đã có trong hệ thống' as ErrorDesc
		RETURN
	end
else
	begin transaction
	begin try
		DECLARE @i int = 0
		WHILE @i <  @soLuong
		BEGIN
			 SET @i = @i + 1
			 INSERT INTO [dbo].[Xe] (Xe_MaLoaiXe,Xe_Ten,Xe_BienSo,Xe_Gia,Xe_Mau,Xe_NguoiTao,Xe_NgayTao,Xe_TrangThai)
			 VALUES (@xe_MaLoaiXe,@xe_Ten,@xe_BienSo,@xe_Gia,@xe_Mau,@xe_NguoiTao,GETDATE(),'N')
		END
	declare @id int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch
rollback transaction
end catch
Go
/*triggers after insert xe*/
GO
CREATE or alter TRIGGER Group12_Xe_Plus_LoaiXe_SL
ON Xe
AFTER INSERT
AS
BEGIN
	update LoaiXe 
	set LoaiXe_SoLuong+=1 
	from inserted
	where LoaiXe.Ma = inserted.Xe_MaLoaiXe
END
GO