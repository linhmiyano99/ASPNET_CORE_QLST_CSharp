USE DbPratice

GO

CREATE PROC LOAIXE_Group4Search
@Ma int = NULL,
@LoaiXe_Ten nvarchar(50) = NULL,
@LoaiXe_Hang nvarchar(50) = NULL,
@LoaiXe_DinhMucNhienLieu float = NULL,
@LoaiXe_NamSX int = NULL,
@LoaiXe_LoaiNhienLieu varchar(1) = NULL
AS
BEGIN
	SELECT * FROM LoaiXe
	WHERE
	(@Ma is NULL or LoaiXe.Ma = @Ma) and
	(@LoaiXe_Ten is NULL or LoaiXe.LoaiXe_Ten = '' or LoaiXe.LoaiXe_Ten like '%' + @LoaiXe_Ten + '%') and
	(@LoaiXe_Hang is NULL or LoaiXe.LoaiXe_Hang = '' or LoaiXe.LoaiXe_Hang like '%' + @LoaiXe_Hang + '%') and
	(@LoaiXe_DinhMucNhienLieu is NULL or LoaiXe.LoaiXe_DinhMucNhienLieu = @LoaiXe_DinhMucNhienLieu) and
	(@LoaiXe_NamSX is NULL or LoaiXe.LoaiXe_NamSX = @LoaiXe_NamSX) and
	(@LoaiXe_LoaiNhienLieu is NULL or @LoaiXe_LoaiNhienLieu = '' or LoaiXe.LoaiXe_LoaiNhienLieu like @LoaiXe_LoaiNhienLieu) and
	(LoaiXe.LoaiXe_TrangThai != 'X')
END
GO
CREATE PROC LOAIXE_Group4SearchById
@Ma int = NULL
AS
BEGIN
	SELECT * FROM LoaiXe
	WHERE LoaiXe.Ma = @Ma
END

GO

CREATE PROC LOAIXE_Group4Delete
@Ma INT = NULL
AS

IF(EXISTS(SELECT * FROM Xe WHERE Xe_MaLoaiXe = @Ma and Xe_TrangThai = 'N'))
BEGIN
	SELECT '1' AS Result, N'Có xe thuộc loại xe này trong hệ thống, không thể xóa loại xe' AS ErrorDesc
	RETURN
END

BEGIN TRANSACTION
BEGIN TRY
	UPDATE LOAIXE set LoaiXe_TrangThai = 'X' where Ma = @Ma
COMMIT TRANSACTION
	SELECT '0' AS Result, N'' AS ErrorDesc, @Ma as Ma
END TRY
BEGIN CATCH

ROLLBACK TRANSACTION

END CATCH