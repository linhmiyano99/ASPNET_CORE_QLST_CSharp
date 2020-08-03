USE DbPratice

go

CREATE PROC DeXuat_Group8Edit
    @Ma        INT = null,
    @MaLoaiXe	   NVARCHAR(50) = null,
    @TenXe VARCHAR(50) = null,
    @Mau VARCHAR(50) = null,
    @MucDich   nvarchar (50) NULL ,
    @LyDo      nvarchar (50) NULL ,
    @TrangThai varchar (1) NULL ,
    @NguoiTao  nvarchar (50) NULL ,
    @NgayTao   datetime NULL ,
    @MaBangGia int NULL ,
    @SoLuong   int NULL 
AS
if(exists(select *
from DeXuat
where Ma = @Ma))
begin
    select '1' as Result, N'Biển số đã tồn tại trong hệ thống' as ErrorDesc
    RETURN
end
begin transaction
begin try
	UPDATE Xe  
	SET 
    Xe_Ten=@Xe_Ten,
	DeXuat_MaLoaiXe=@MaLoaiXe	,
    DeXuat_TenXe=@TenXe ,
    DeXuat_Mau=@Mau ,
    DeXuat_MucDich=@MucDich ,
    DeXuat_LyDo=@LyDo     ,
    DeXuat_TrangThai=@TrangThai  ,
    DeXuat_NguoiTao=@NguoiTao  ,
    DeXuat_NgayTao=@NgayTao  ,
    DeXuat_MaBangGia=@MaBangGia ,
    DeXuat_SoLuong=@SoLuong   
	WHERE Ma=@Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch

rollback transaction

end catch
GO



CREATE PROC DeXuat_Group8Delete
    @Ma int = NULL
AS
BEGIN
    DELETE
    FROM DeXuat
    WHERE DeXuat.Ma = @Ma
END
