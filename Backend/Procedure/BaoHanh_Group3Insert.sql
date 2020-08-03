use DbPratice
go
create or alter proc [dbo].[BaoHanh_Group3Insert] @BaoHanh_ChiPhi bigint = NULL,
												  @BaoHanh_NgayBaoHanh datetime = NULL,
												  @BaoHanh_QuyetDinh varchar(1) = NULL,
												  @BaoHanh_NguoiTao nvarchar(max) = NULL,
												  @BaoHanh_MaXe int = NULL as
begin 
insert into [dbo].[BaoHanh] (BaoHanh_ChiPhi,
							 BaoHanh_NgayBaoHanh,
							 BaoHanh_QuyetDinh,
							 BaoHanh_NgayTao,
							 BaoHanh_NguoiTao,
							 BaoHanh_TrangThai,
							 BaoHanh_MaXe)
							 values (@BaoHanh_ChiPhi,
									 @BaoHanh_NgayBaoHanh,
									 @BaoHanh_QuyetDinh,
									 GETDATE(),
									 @BaoHanh_NguoiTao,
									 'N',
									 @BaoHanh_MaXe)
end