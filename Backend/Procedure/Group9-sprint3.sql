USE DbPratice
Go
-------------------[dbo].[Group9BaoTri_Insert] 6/17/2020----------------
create or alter proc [dbo].[BAOTRI_Group9Insert]
	@Baotri_MaBaoTri        varchar(20) NULL,
	@BaoTri_NoiBaoTri       nvarchar(max) NULL ,
	@BaoTri_NgayBaotri   datetime NULL ,
	@BaoTri_NgayXuatXuong   datetime NULL ,
	@BaoTri_ThanhTien       bigint NULL ,
	@BaoTri_TinhTrangBaoTri varchar(1) NULL ,
	@BaoTri_MaXe            int NULL ,
	@BaoTri_MaTaiXe         int NULL ,
	@BaoTri_MaNguoiGui      nvarchar(max) NULL ,
	@BaoTri_NguoiTao        nvarchar(max) NULL ,
	@BaoTri_NgayTao         datetime NULL ,
	@Baotri_NguoiDuyet      varchar(15) NULL,
	@BaoTri_NgayDuyet      datetime NULL ,
	@BaoTri_TrangThai       varchar(1) NULL ,
	@BaoTri_GhiChu          nvarchar(max) NULL 
as

if(exists(select * from BaoTri where Baotri_MaBaoTri = @Baotri_MaBaoTri or (BaoTri_MaXe = @BaoTri_MaXe and (not(BaoTri_TrangThai = 'A' and BaoTri_TinhTrangBaoTri = 'D') or BaoTri_TrangThai != 'X'))))
begin
	select '1' as Result, N'Đề xuất đã tồn tại trong hệ thống' as ErrorDesc
	return
end
else

begin transaction
begin try
	INSERT INTO [dbo].[BaoTri]
    ( 
		[Baotri_MaBaoTri] ,
		[BaoTri_NoiBaoTri]     ,
		[BaoTri_NgayBaotri],
		[BaoTri_NgayXuatXuong]   ,
		[BaoTri_ThanhTien]    ,
		[BaoTri_TinhTrangBaoTri] ,
		[BaoTri_MaXe]             ,
		[BaoTri_MaTaiXe]          ,
		[BaoTri_MaNguoiGui] ,
		[BaoTri_NguoiTao]       ,
		[BaoTri_NgayTao]    ,
		[Baotri_NguoiDuyet]    ,
		[BaoTri_NgayDuyet],
		[BaoTri_TrangThai]      ,
		[BaoTri_GhiChu])
	VALUES
    (   
		@BaoTri_MaBaoTri,
		@BaoTri_NoiBaoTri     ,
		@BaoTri_NgayBaotri,
		@BaoTri_NgayXuatXuong  ,
		@BaoTri_ThanhTien       ,
		'C',
		@BaoTri_MaXe           ,
		@BaoTri_MaTaiXe      ,
		@BaoTri_MaNguoiGui,
		@BaoTri_NguoiTao   ,
		GetDate()         ,
		@Baotri_NguoiDuyet,
		@BaoTri_NgayDuyet      ,
		'N'    ,
		@BaoTri_GhiChu)

	declare @Ma int = SCOPE_IDENTITY()
	if(@BaoTri_NgayBaotri is null)
	begin
	update baotri
	set BaoTri_NgayBaoTri = DATEADD(DAY, Xe.Xe_KiHanBaoTri, Xe.Xe_NgayBaoTri)
	from BaoTri, Xe
	where Xe.Ma = @BaoTri_MaXe and BaoTri.Ma = @Ma 
	end
	

commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
-------------------[dbo].[Group9BaoTri_Update] 6/17/2020----------------

create or alter proc [dbo].[BAOTRI_Group9Update]
    @Ma int = NULL,
	@Baotri_MaBaoTri        varchar(20) NULL,
	@BaoTri_NoiBaoTri       nvarchar(max) NULL ,
	@BaoTri_NgayBaotri		datetime NULL,
	@BaoTri_NgayXuatXuong   datetime NULL ,
	@BaoTri_ThanhTien       bigint NULL ,
	@BaoTri_TinhTrangBaoTri varchar(1) NULL ,
	@BaoTri_MaXe            int NULL ,
	@BaoTri_MaTaiXe         int NULL ,
	@BaoTri_MaNguoiGui      nvarchar(max) NULL ,
	@BaoTri_NguoiTao        nvarchar(max) NULL ,
	@BaoTri_NgayTao         datetime NULL ,
	@Baotri_NguoiDuyet      varchar(15) NULL,
	@BaoTri_NgayDuyet      datetime NULL ,
	@BaoTri_TrangThai       varchar(1) NULL ,
	@BaoTri_GhiChu          nvarchar(max) NULL 

as

if(not exists(select * from Xe where Ma =@BaoTri_MaXe and  Xe_TrangThai = 'B'))
begin
	select '1' as Result, N'Dữ liệu không tồn tại trong hệ thống' as ErrorDesc
	RETURN
end
if(not exists(select * from BaoTri where Ma =@Ma and  @BaoTri_TrangThai = 'N' and @BaoTri_TinhTrangBaoTri = 'D'))
begin
	select '1' as Result, N'Không thể cập nhật thông tin bảo trì' as ErrorDesc
	RETURN
end
begin transaction
begin try

	UPDATE [dbo].[BaoTri]
	   SET [BaoTri_MaBaoTri] = @Baotri_MaBaoTri
		  ,[BaoTri_NgayDuyet] = @BaoTri_NgayDuyet
		  ,[BaoTri_NoiBaoTri] = @BaoTri_NoiBaoTri
		  ,[BaoTri_NgayBaotri] = @BaoTri_NgayBaotri
		  ,[BaoTri_NgayXuatXuong] = @BaoTri_NgayXuatXuong
		  ,[BaoTri_ThanhTien] = @BaoTri_ThanhTien 
		  ,[BaoTri_TinhTrangBaoTri] = 'D'
		  ,[BaoTri_MaXe] = @BaoTri_MaXe
		  ,[BaoTri_MaTaiXe] = @BaoTri_MaTaiXe
		  ,[BaoTri_NgayTao] = @BaoTri_NgayTao
		  ,[BaoTri_TrangThai] = 'N'
		  ,[BaoTri_GhiChu] = @BaoTri_GhiChu 
	WHERE Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch

go
-------------------[dbo].[Group9BaoTri_ById] 6/17/2020----------------

create or alter proc [dbo].[BAOTRI_Group9ById]
    @Ma int = NULL
as
begin
select *
from BaoTri
where Ma = @Ma and BaoTri_TrangThai != 'X'
end
go
-------------------[dbo].[Group9BaoTri_SearchAll] 6/17/2020----------------
create or alter proc [dbo].[BAOTRI_Group9SearchAll]
as
begin
select *
from BaoTri
where BaoTri_TrangThai != 'X'
end
go
-------------------[dbo].[Group9BaoTri_Search] 6/17/2020----------------
create or alter proc [dbo].[BAOTRI_Group9Search] 
 @Ma int = NULL,
 	@Baotri_MaBaoTri        varchar(20) NULL,
	@BaoTri_NoiBaoTri       nvarchar(max) NULL ,
	@BaoTri_NgayBaotri datetime NULL,
	@BaoTri_NgayXuatXuong   datetime NULL ,
	@BaoTri_ThanhTien       bigint NULL ,
	@BaoTri_TinhTrangBaoTri varchar(1) NULL ,
	@BaoTri_MaXe            int NULL ,
	@BaoTri_MaTaiXe         int NULL ,
	@BaoTri_MaNguoiGui		nvarchar(max),
	@BaoTri_NguoiTao        nvarchar(max) NULL ,
	@BaoTri_NgayTao         datetime NULL ,
	@Baotri_NguoiDuyet      varchar(15) NULL,
	@BaoTri_NgayDuyet      datetime NULL ,
	@BaoTri_TrangThai       varchar(1) NULL ,
	@BaoTri_GhiChu          nvarchar(max) NULL 
	as
begin
	select * from BaoTri
	where (@Ma is null or Ma = @Ma)
	and (@Baotri_MaBaoTri is null or Baotri_MaBaoTri = @Baotri_MaBaoTri)
	and (@BaoTri_NgayDuyet is null or BaoTri_NgayDuyet = @BaoTri_NgayDuyet)
	and (@BaoTri_NguoiDuyet is null or BaoTri_NguoiDuyet = @BaoTri_NguoiDuyet)
	and (@BaoTri_NoiBaoTri is null or BaoTri_NoiBaoTri = @BaoTri_NoiBaoTri)
	and (@BaoTri_NgayBaotri is null or BaoTri_NgayBaotri = @BaoTri_NgayBaotri)
	and (@BaoTri_NgayXuatXuong is null or BaoTri_NgayXuatXuong = @BaoTri_NgayXuatXuong)
	and (@BaoTri_ThanhTien is null or BaoTri_ThanhTien = @BaoTri_ThanhTien)
	and (@BaoTri_TinhTrangBaoTri is null or BaoTri_TinhTrangBaoTri = @BaoTri_TinhTrangBaoTri)
	and (@BaoTri_MaXe is null or BaoTri_MaXe = @BaoTri_MaXe)
	and (@BaoTri_MaTaiXe is null or BaoTri_MaTaiXe = @BaoTri_MaTaiXe)
	and (@BaoTri_MaNguoiGui is null or BaoTri_MaNguoiGui = @BaoTri_MaNguoiGui)
	and (@BaoTri_NguoiTao is null or BaoTri_NguoiTao = @BaoTri_NguoiTao)
	and (@BaoTri_NgayTao is null or BaoTri_NgayTao = @BaoTri_NgayTao)
	and (@BaoTri_TrangThai is null or BaoTri_TrangThai = @BaoTri_TrangThai)
	and (@BaoTri_GhiChu is null or BaoTri_GhiChu = @BaoTri_GhiChu)
	and (BaoTri_TrangThai != 'X')

end
go
-------------------[dbo].[Group9BaoTri_Delete] 6/17/2020----------------
create or alter proc [dbo].[BAOTRI_Group9Delete] @Ma int = NULL
as

if(exists(select * from BaoTri where (BaoTri_TrangThai = 'A' or BaoTri_TinhTrangBaoTri = 'D') and Ma = @Ma))
begin
	select '1' as Result, N'Xe đã được duyệt hoặc đang đi bảo trì không được xóa' as ErrorDesc
	return
end
begin transaction
begin try
	update BaoTri 
	set BaoTri_TrangThai = 'X'
	where Ma = @Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as Ma
end try
begin catch

rollback transaction

end catch
go
-------------------[dbo].[Group9BaoTri_App] 6/17/2020----------------

create or alter Proc [dbo].[BAOTRI_Group9App] 
@Id int = NULL,@CheckerId varchar(15)
as
if(exists(select * from BaoTri, Xe where BaoTri.Ma = @id and BaoTri.BaoTri_MaXe = Xe.Ma and ((BaoTri.BaoTri_TrangThai = 'A') or (BaoTri.BaoTri_TrangThai = 'N' and BaoTri_TinhTrangBaoTri = 'D' and BaoTri_NgayXuatXuong is null))))
begin
	select '1' as Result, N'Thông báo đã được duyệt' as ErrorDesc
	return
end
else
begin transaction
begin try
begin
	if(exists(select * from BaoTri where Ma = @id and BaoTri_NgayXuatXuong is null))
	begin
		update Xe 
		set Xe_TrangThai = 'B'
		from BaoTri, Xe
		where BaoTri.Ma = @Id 
		and BaoTri.BaoTri_MaXe = Xe.Ma

		update BaoTri 
		set BaoTri_TrangThai = 'N'
		, BaoTri_TinhTrangBaoTri = 'D'
		, Baotri_NguoiDuyet = @CheckerId
		, BaoTri_NgayDuyet = GetDate()
		where Ma = @Id
		if(exists(select * from BaoTri where Ma = @id and BaoTri_NgayBaoTri < GetDate()))
		begin
			update BaoTri 
			set BaoTri_NgayBaoTri = GetDate()
			where Ma = @Id
		end
	end
	else
	begin
		update Xe 
		set Xe_TrangThai = 'N', Xe.Xe_NgayBaoTri = BaoTri.BaoTri_NgayBaoTri
		from BaoTri, Xe
		where BaoTri.Ma = @Id and BaoTri.BaoTri_MaXe = Xe.Ma

		update BaoTri 
		set BaoTri_TrangThai = 'A', BaoTri_TinhTrangBaoTri = 'C', Baotri_NguoiDuyet = @CheckerId, BaoTri_NgayDuyet = GetDate()
		where Ma = @Id
	end
end
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as Ma
end try
begin catch

rollback transaction

end catch
go
-------------------[dbo].[Group9BaoTri_SearchPersonalTaiXe] 6/17/2020----------------


create or alter proc [dbo].[BAOTRI_Group9SearchPersonalPropose]
    @BaoTri_MaNguoiTao      nvarchar(max) NULL 
as
begin
select *
from BaoTri
where BaoTri_Nguoitao = @BaoTri_MaNguoiTao and BaoTri_TrangThai = 'N'
end
go

create or alter proc [dbo].[BAOTRI_Group9SearchAllPersonal]
    @BaoTri_MaNguoiTao      nvarchar(max) NULL 
as
begin
select *
from BaoTri
where BaoTri_Nguoitao = @BaoTri_MaNguoiTao and BaoTri_TrangThai != 'X'
end
go

create or alter proc [dbo].[BAOTRI_Group9SearchPersonalApproved]
    @BaoTri_MaNguoiTao      nvarchar(max) NULL 
as
begin
select *
from BaoTri
where BaoTri_Nguoitao = @BaoTri_MaNguoiTao 
and BaoTri_TrangThai = 'A' 
and BaoTri_TinhTrangBaoTri = 'D'
end
go

create or alter proc [dbo].[BAOTRI_Group9SearchPersonalDone]
    @BaoTri_MaNguoiTao      nvarchar(max) NULL 
as
begin
select *
from BaoTri
where BaoTri_Nguoitao = @BaoTri_MaNguoiTao 
and BaoTri_TrangThai = 'A' 
and BaoTri_TinhTrangBaoTri = 'C'
end
go


-------------------[dbo].[Group9BaoTri_SearchPersonalKiemSat] 6/17/2020----------------

create or alter proc [dbo].[BAOTRI_Group9ShouldMaintain]

as
begin
select *
from Xe
where Xe_TrangThai = 'N'
	and DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) > Xe_KiHanBaoTri - 30
	and DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) < Xe_KiHanBaoTri
	and Xe.Xe_TrangThai != 'B'
	and (not exists(select * from BaoTri where Xe.ma = BaoTri_MaXe 
	and (BaoTri_TrangThai != 'X' or (BaoTri_TrangThai = 'N' 
	and BaoTri_TinhTrangBaoTri = 'C'))))
end
go

create or alter proc [dbo].[BAOTRI_Group9UrgentMaintain]

as
begin
select *
from Xe
where Xe_TrangThai = 'N' 
	and DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) >= Xe_KiHanBaoTri
	and Xe.Xe_TrangThai != 'B'
	and (not exists(select * from BaoTri where Xe.ma = BaoTri_MaXe 
	and (BaoTri_TrangThai != 'X' or (BaoTri_TrangThai = 'N' 
	and BaoTri_TinhTrangBaoTri = 'C'))))
end
go

create or alter proc [dbo].[BAOTRI_Group9MaintainAll]

as
begin
select *
from Xe
where Xe_TrangThai = 'N' 
	and (DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) >= Xe_KiHanBaoTri
	and Xe.Xe_TrangThai != 'B'
	and (not exists(select * from BaoTri where Xe.ma = BaoTri_MaXe 
	and (BaoTri_TrangThai != 'X' or (BaoTri_TrangThai = 'N'
	and BaoTri_TinhTrangBaoTri = 'C')))))
	or(DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) > Xe_KiHanBaoTri - 30
	and DATEDIFF(Day, Xe_NgayBaoTri, GETDATE()) < Xe_KiHanBaoTri
	and Xe.Xe_TrangThai != 'B'
	and (not exists(select * from BaoTri where Xe.ma = BaoTri_MaXe 
	and (BaoTri_TrangThai != 'X' or (BaoTri_TrangThai = 'N' 
	and BaoTri_TinhTrangBaoTri = 'C')))))
end
go

create or alter proc [dbo].[BAOTRI_Group9SearchXeStateNoMaintain]

as
begin
select *
from Xe
where Xe_TrangThai != 'B' 
	and Xe_TrangThai != 'X'
	and (Ma not in(select distinct Xe.Ma from Xe, BaoTri where Xe.Ma = BaoTri.BaoTri_MaXe and BaoTri_TrangThai = 'N'))
end
go

create or alter proc [dbo].[BAOTRI_Group9SearchXeInMaintain]

as
begin
select *
from Xe
where Xe_TrangThai != 'X'
	and (Ma in(select  Xe.Ma from Xe, BaoTri where Xe.Ma = BaoTri.BaoTri_MaXe and BaoTri_TrangThai != 'X'))
end
go


exec [BAOTRI_Group9SearchXeStateNoMaintain]

exec [BAOTRI_Group9UrgentMaintain]
exec [BAOTRI_Group9ShouldMaintain]
exec [BAOTRI_Group9SearchXeInMaintain]

select * from baotri
select * from xe
alter table xe add Xe_KiHanBaoTri int NULL
alter table xe drop column Xe_KyHan 


