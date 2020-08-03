USE [DbPratice]
GO
/****** Object:  StoredProcedure [dbo].[BAOHANH_Group1Edit]    Script Date: 6/23/2020 8:39:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER Proc [dbo].[BAOHANH_Group1Edit]
@Ma int = NULL,
@BaoHanh_ChiPhi bigint = NULL,
@BaoHanh_NgayBaoHanh datetime = NULL,
@BaoHanh_QuyetDinh varchar(1) = NULL,
@BaoHanh_NgayTao datetime = NULL,
@BaoHanh_NguoiTao nvarchar(max) = NULL,
@BaoHanh_TrangThai varchar(1) = NULL,
@BaoHanh_MaXe int = NULL

as
begin transaction
begin try

	UPDATE [dbo].[BaoHanh]
	   SET [BaoHanh_ChiPhi] = @BaoHanh_ChiPhi
		  ,[BaoHanh_NgayBaoHanh] = @BaoHanh_NgayBaoHanh
		  ,[BaoHanh_QuyetDinh] = @BaoHanh_QuyetDinh
		  ,[BaoHanh_NgayTao] = @BaoHanh_NgayTao
		  ,[BaoHanh_NguoiTao] = @BaoHanh_NguoiTao
		  ,[BaoHanh_TrangThai] = @BaoHanh_TrangThai
		  ,[BaoHanh_MaXe] = @BaoHanh_MaXe
	WHERE Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @ma as MA
end try
begin catch

rollback transaction

end catch


GO
/****** Object:  StoredProcedure [dbo].[BAOHANH_Group1Del]    Script Date: 6/23/2020 8:40:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER Proc [dbo].[BAOHANH_Group1Del] @Ma int = NULL
as
--IF(EXISTS(SELECT * FROM BaoHanh WHERE BaoHanh_MaXe = @Ma and BaoHanh_TrangThai = 'N'))
--BEGIN
--	SELECT '1' AS Result, N', không ???c xóa' AS ErrorDesc
--	RETURN
--END
begin transaction
begin try
	update BaoHanh set BaoHanh_TrangThai = 'X' where Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as MA
end try
begin catch

rollback transaction

end catch
