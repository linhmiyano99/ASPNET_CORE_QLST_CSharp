Use [DbPratice]
GO

CREATE PROC [dbo].[THANHLY_Group2Search]
@ThanhLy_MaXe int=NULL
as
begin
	SELECT X.Ma, X.Xe_Ten, X.Xe_BienSo, L.LoaiXe_Hang, L.LoaiXe_NamSX, X.Xe_Mau, X.Xe_Gia, L.LoaiXe_DinhMucNhienLieu
	FROM [dbo].[Xe] X INNER JOIN [dbo].[LoaiXe] L
	ON X.Xe_MaLoaiXe = L.Ma
	WHERE
	(@ThanhLy_MaXe is NULL or X.Ma = @ThanhLy_MaXe) AND (X.Xe_TrangThai != 'X')
end
GO
--Insert vao thanh ly

CREATE Proc [dbo].[THANHLY_Group2ThanhLy]
@ThanhLy_MaXe int=NULL,
@ThanhLy_LyDo varchar(50)=NULL,
@ThanhLy_NguoiMua varchar(50)=NULL,
@ThanhLy_SoTien bigint=NULL,
@ThanhLy_NguoiTao varchar(50)=NULL,
@ThanhLy_NgayTao datetime=NULL
as

if(exists(select * from ThanhLy where ThanhLy_MaXe = @ThanhLy_MaXe))
begin
	select N'Dữ liệu thanh lý đã tồn tại trong hệ thống' as ErrorDesc, '1' as Result
	RETURN
end

begin transaction
begin try
	INSERT INTO [dbo].[ThanhLy]
           ([ThanhLy_MaXe]
			,[ThanhLy_LyDo]
			,[ThanhLy_NguoiMua]
			,[ThanhLy_SoTien]
			,[ThanhLy_NguoiTao]
			,[ThanhLy_NgayTao])
	VALUES 
		(@ThanhLy_MaXe, @ThanhLy_LyDo, @ThanhLy_NguoiMua, @ThanhLy_SoTien, @ThanhLy_NguoiTao, @ThanhLy_NgayTao)

	update [dbo].[Xe] 
	set Xe_TrangThai = 'X'
	from [dbo].[Xe] X inner join [dbo].[ThanhLy] T
	On (X.Ma = T.ThanhLy_MaXe)
	Where T.ThanhLy_MaXe = @ThanhLy_MaXe
commit transaction
	select N'Đã Thanh lý' as ErrorDesc, 'O' as Result
end try
begin catch
	rollback transaction
end catch

