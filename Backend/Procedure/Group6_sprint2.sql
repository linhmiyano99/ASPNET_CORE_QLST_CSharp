use DbPratice
go

CREATE PROC Xe_Group6Update
	@Ma        INT = null, 
	@Xe_Ten	   NVARCHAR(50) = null,
	@Xe_BienSo VARCHAR(50) = null
AS 
if(exists(select * from Xe where Xe_BienSo = @Xe_BienSo))
begin
	select '1' as Result, N'Biển số đã tồn tại trong hệ thống' as ErrorDesc
	RETURN
end
begin transaction
begin try
	UPDATE Xe  
	SET Xe_Ten=@Xe_Ten,
	Xe_BienSo=@Xe_BienSo
	WHERE Ma=@Ma
commit transaction
	select '0' as Result, N'' as ErrorDesc, @Ma as ID
end try
begin catch

rollback transaction

end catch
GO

create proc Xe_Group6_SearchByDay
@start_day nvarchar(20) = null,
@end_day nvarchar(20) = null
as 
if(@start_day is null and @end_day is null)
begin
	select * from Xe
end
if(@start_day is null and @end_day is not null)
begin
	select * from Xe where Xe_NgayTao = @end_day
end
else if(@start_day is not null and @end_day is null)
begin
	select * from Xe where Xe_NgayTao = @start_day
end
if(@start_day is not null and @end_day is not null)
begin
	select * from Xe where Xe_NgayTao between @start_day and @end_day
end


