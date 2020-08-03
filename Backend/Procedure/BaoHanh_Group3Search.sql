use DbPratice
go
create or alter proc [dbo].[BaoHanh_Group3Search] @BaoHanh_NgayBaoHanh datetime = NULL,
												  @BaoHanh_ChiPhi bigint = NULL,
												  @BaoHanh_QuyetDinh varchar(1) = NULL,
												  @BaoHanh_MaXe int = NULL as
begin 
select * from BaoHanh
where 
(@BaoHanh_NgayBaoHanh is NULL or datediff(DAY, @BaoHanh_NgayBaoHanh, BaoHanh_NgayBaoHanh) = 0) and
(@BaoHanh_ChiPhi is NULL or BaoHanh_ChiPhi = @BaoHanh_ChiPhi) and 
(@BaoHanh_QuyetDinh is NULL or BaoHanh_QuyetDinh = @BaoHanh_QuyetDinh) and
(@BaoHanh_MaXe is NULL or BaoHanh_MaXe = @BaoHanh_MaXe) and
(BaoHanh_TrangThai != 'X')
end