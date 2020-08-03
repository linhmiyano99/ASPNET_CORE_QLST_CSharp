USE DbPratice

go

CREATE PROC PhiDuongBo_Group8Edit
    @Ma        INT = null,
    @MaXe	   NVARCHAR(50) = null,
    @LoaiPhi VARCHAR(50) = null,
    @NgayDangKy VARCHAR(50) = null,
    @NgayHetHan   nvarchar (50) NULL ,
    @SoTien      nvarchar (50) NULL ,
    @TinhTrang varchar (1) NULL ,
    @GhiChu  nvarchar (50) NULL ,
    @NguoiTao   nvarchar (50) NULL ,

    @NgayTao   datetime NULL ,
    @TrangThai int NULL ,
    @NoiDung   int NULL,
    @MaTaiXe   nvarchar (50) NULL

AS
if(exists(select *
from PhiDuongBo
where Ma = @Ma))
begin
    select '1' as Result, N'Mã  đã tồn tại trong hệ thống' as ErrorDesc
    RETURN
end
begin transaction
begin try
	UPDATE PhiDuongBo  
	SET 
    Ma=@Ma,
	PhiDuongBo_MaXe=@MaXe	,
    PhiDuongBo_LoaiPhi=@LoaiPhi ,
    PhiDuongBo_NgayDangKy=@NgayDangKy ,
    PhiDuongBo_NgayHetHan=@NgayHetHan ,
    PhiDuongBo_SoTien=@SoTien     ,
    PhiDuongBo_TinhTrang=@TinhTrang  ,
    PhiDuongBo_GhiChu=@GhiChu  ,
    PhiDuongBo_NguoiTao=@NguoiTao  ,
    PhiDuongBo_NgayTao=@NgayTao ,
    PhiDuongBo_TrangThai=@TrangThai,  
    PhiDuongBo_NoiDung=@NoiDung,
    PhiDuongBo_MaTaiXe=@MaTaiXe
	WHERE Ma=@Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch

rollback transaction

end catch
GO



CREATE PROC PhiDuongBo_Group8Delete
    @Ma int = NULL
AS
BEGIN
    DELETE
    FROM PhiDuongBo
    WHERE PhiDuongBo.Ma = @Ma
END

GO
CREATE PROC PhiDuongBo_Group8Insert
    @MaXe	   NVARCHAR (50) = null,
    @LoaiPhi VARCHAR (50) = null,
    @NgayDangKy VARCHAR (50) = null,
    @NgayHetHan   nvarchar (50) NULL ,
    @SoTien      nvarchar (50) NULL ,
    @TinhTrang varchar (1) NULL ,
    @GhiChu  nvarchar (50) NULL ,
    @NguoiTao   nvarchar (50) NULL ,
    @NgayTao   datetime NULL ,
    @TrangThai int NULL ,
    @NoiDung   int NULL,
    @MaTaiXe   nvarchar
(50) NULL
AS
BEGIN
    INSERT INTO PhiDuongBo
        (PhiDuongBo_MaXe,
    PhiDuongBo_LoaiPhi,
    PhiDuongBo_NgayDangKy ,
    PhiDuongBo_NgayHetHan ,
    PhiDuongBo_SoTien    ,
    PhiDuongBo_TinhTrang ,
    PhiDuongBo_GhiChu ,
    PhiDuongBo_NguoiTao ,
    PhiDuongBo_NgayTao ,
    PhiDuongBo_TrangThai,  
    PhiDuongBo_NoiDung,
    PhiDuongBo_MaTaiXe)

    VALUES
        (   @MaXe,
            @LoaiPhi,
            @NgayDangKy,
            @NgayHetHan,
            @SoTien,
            @TinhTrang,
            @GhiChu,
            @NguoiTao,
            GETDATE(),
            @TrangThai,
            @NoiDung,
            @MaTaiXe
            )
END

