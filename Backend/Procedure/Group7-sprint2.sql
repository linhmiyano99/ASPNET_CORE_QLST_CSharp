use DbPratice
/* PROC show danh sách bảng giá ---------------------------------------*/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc DeXuat_BangGia_Group7SelectBangGia
@DeXuatBangGia_MaDeXuat int NULL
as
begin
	select *
	from DeXuat_BangGia
	where DeXuatBangGia_MaDeXuat=@DeXuatBangGia_MaDeXuat
end


/* PROC  đề xuất đã chọn ---------------------------------------*/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc DeXuat_Group7SelectDeXuat
@Ma int NULL
as
begin
	select DeXuat.*,LoaiXe.LoaiXe_Hang as LoaiXe_Hang,LoaiXe.LoaiXe_NamSX as LoaiXe_NamSX
	from DeXuat
	inner join LoaiXe on DeXuat.DeXuat_MaLoaiXe=LoaiXe.Ma
	where DeXuat.Ma=@Ma
end



-- ////// Proc phê duyệt

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc DeXuat_Group7Approve
@Ma int  NULL,
@DeXuat_MaBangGia  int NULL,
@DeXuat_LyDo nvarchar(50) NULL
as

if(not exists(select * from DeXuat where Ma = @Ma))
begin
	select '1' as Result, N'Dữ liệu không tồn tại trong hệ thống' as ErrorDesc 
	return
end

if(not exists(select * from DeXuat_BangGia where DeXuat_BangGia.Ma = @DeXuat_MaBangGia ) )
begin	
	select '1' as Result, N'Bảng giá không tồn tại trong hệ thống' as ErrorDesc 
	return
end
begin transaction
begin try

	UPDATE [dbo].[DeXuat]
    SET DeXuat_MaBangGia=@DeXuat_MaBangGia,
		DeXuat_TrangThai='D',
		DeXuat_LyDo=@DeXuat_LyDo    
	WHERE Ma=@Ma
commit transaction
	select '0' as Result, N'Hoàn thành' as ErrorDesc , @Ma as Ma
end try
begin catch

rollback transaction

end catch
go



-- ////// Proc từ chối

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc DeXuat_Group7Reject
@Ma int  NULL,
@DeXuat_LyDo nvarchar(50) NULL
as

if(not exists(select * from DeXuat where Ma = @Ma))
begin
	select '1' as Result, N'Dữ liệu không tồn tại trong hệ thống' as ErrorDesc 
	return
end

begin transaction
begin try

	UPDATE [dbo].[DeXuat]
    SET 
		DeXuat_TrangThai='T',
		DeXuat_LyDo=@DeXuat_LyDo    
	WHERE Ma=@Ma
commit transaction
	select '0' as Result, N'Hoàn thành' as ErrorDesc , @Ma as Ma
end try
begin catch

rollback transaction

end catch
go