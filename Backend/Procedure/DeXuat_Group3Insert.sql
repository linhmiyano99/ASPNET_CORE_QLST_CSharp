create or alter proc [dbo].[DeXuat_Group3Insert] @DeXuat_MaLoaiXe int = NULL,
												 @DeXuat_TenXe nvarchar(50) = NULL,
												 @DeXuat_Mau nvarchar(50) = NULL,
												 @DeXuat_MucDich nvarchar(50) = NULL,
												 @DeXuat_LyDo nvarchar(50) = NULL,
												 @DeXuat_NguoiTao nvarchar(50) = NULL,
												 @DeXuat_SoLuong int = NULL as
begin 
insert into [dbo].[DeXuat] (DeXuat_MaLoaiXe,
							DeXuat_TenXe,
							DeXuat_Mau,
							DeXuat_MucDich,
							DeXuat_LyDo,
							DeXuat_TrangThai,
							DeXuat_NguoiTao,
							DeXuat_NgayTao,
							DeXuat_SoLuong)
							values (@DeXuat_MaLoaiXe,
								   @DeXuat_TenXe,
								   @DeXuat_Mau,
								   @DeXuat_MucDich,
								   @DeXuat_LyDo,
								   'N',
								   @DeXuat_NguoiTao,
								   GETDATE(),
								   @DeXuat_SoLuong)
end
