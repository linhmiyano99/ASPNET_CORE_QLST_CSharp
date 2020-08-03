
CREATE TABLE [dbo].[Cars](
	[Id] [int] primary key IDENTITY(1,1) NOT NULL,
	[CarID] [varchar](20) NULL,
	[CarCode] [varchar](20) NULL,
	[Name] [nvarchar](max) NULL,
	[Color] [nvarchar](max) NULL,
	[RecordStatus] [varchar](1) NULL,
	[MakerId] [varchar](15) NULL,
	[CreateDt] [datetime] NULL,
	[AuthStatus] [varchar](1) NULL,
	[CheckerId] [varchar](15) NULL,
	[ApproveDt] [datetime] NULL,
 )
/****** Object:  StoredProcedure [dbo].[CAR_App]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[CAR_App] @Id int = NULL,@CheckerId varchar(15)
as
begin transaction
begin try
	update Cars 
	set AuthStatus = 'A', ApproveDt = GETDATE(), CheckerId = @CheckerId
	where Id = @Id
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch

rollback transaction

end catch
GO
/****** Object:  StoredProcedure [dbo].[CAR_ById]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[CAR_ById] @Id int = NULL
as
	select * from Cars where Id = @Id
GO
/****** Object:  StoredProcedure [dbo].[CAR_Del]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[CAR_Del] @Id int = NULL
as
begin transaction
begin try
	update Cars set RecordStatus = '0' where Id = @Id
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch

rollback transaction

end catch
GO
/****** Object:  StoredProcedure [dbo].[CAR_Ins]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
alter Proc [dbo].[CAR_Ins]
@CarID varchar(20)=NULL,
@CarCode varchar(20)=NULL,
@Name nvarchar(max)=NULL,
@Color nvarchar(max)=NULL,
@RecordStatus varchar(1)=NULL,
@MakerId varchar(15)=NULL,
@CreateDt datetime=NULL,
@AuthStatus varchar(1)=NULL,
@CheckerId varchar(15)=NULL,
@ApproveDt datetime=NULL
as

if(exists(select * from Cars where CarID = @CarID))
begin
	select '-1' as Result, N'Dữ liệu đã tồn tại trong hệ thống' as ErrorDesc
	RETURN
end

begin transaction
begin try
	if(@RecordStatus is null or @RecordStatus = '')
	begin
		SET @RecordStatus =  '1'
	end
	INSERT INTO [dbo].[Cars]
           ([CarID]
           ,[CarCode]
           ,[Name]
           ,[Color]
           ,[RecordStatus]
           ,[MakerId]
           ,[CreateDt]
           ,[AuthStatus]
           ,[CheckerId]
           ,[ApproveDt])
     VALUES
           (@CarID
           ,@CarCode
           ,@Name
           ,@Color
           ,@RecordStatus
           ,@MakerId
           ,GETDATE()
           ,'U'
           ,@CheckerId
           ,@ApproveDt)
	declare @id int = SCOPE_IDENTITY()
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch

rollback transaction

end catch
GO
/****** Object:  StoredProcedure [dbo].[CAR_Search]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[CAR_Search] 
@Id int= NULL,
@CarID varchar(20)=NULL,
@CarCode varchar(20)=NULL,
@Name nvarchar(max)=NULL,
@Color nvarchar(max)=NULL,
@RecordStatus varchar(1)=NULL,
@MakerId varchar(15)=NULL,
@CreateDt datetime=NULL,
@AuthStatus varchar(1)=NULL,
@CheckerId varchar(15)=NULL,
@ApproveDt datetime=NULL
as
begin
	select * from Cars
	where (@CarID is null or CarID = @CarID)
	and (@CarCode is null or CarCode = @CarCode)
	and (@Name is null or @Name = '' or Name like '%' + @Name + '%')
	and (@Color is null or Color = @Color)
	and (@RecordStatus is null or RecordStatus = @RecordStatus)
	and (@MakerId is null or MakerId = @MakerId)
	and (@CreateDt is null or CreateDt = @CreateDt)
	and (@AuthStatus is null or AuthStatus = @AuthStatus)
	and (@CheckerId is null or CheckerId = @CheckerId)
	and (@ApproveDt is null or ApproveDt = @ApproveDt)
end
GO
/****** Object:  StoredProcedure [dbo].[CAR_Upd]    Script Date: 5/3/2020 9:57:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create Proc [dbo].[CAR_Upd]
@Id int = NULL,
@CarID varchar(20)=NULL,
@CarCode varchar(20)=NULL,
@Name nvarchar(max)=NULL,
@Color nvarchar(max)=NULL,
@RecordStatus varchar(1)=NULL,
@MakerId varchar(15)=NULL,
@CreateDt datetime=NULL,
@AuthStatus varchar(1)=NULL,
@CheckerId varchar(15)=NULL,
@ApproveDt datetime=NULL
as

if(exists(select * from Cars where CarID = @CarID))
begin
	select '-1' as Result, N'Dữ liệu đã tồn tại trong hệ thống' as ErrorDesc
end

begin transaction
begin try

	UPDATE [dbo].[Cars]
	   SET [CarID] = @CarID
		  ,[CarCode] = @CarCode
		  ,[Name] = @Name
		  ,[Color] = @Color
		  ,[RecordStatus] = @RecordStatus
		  ,[MakerId] = @MakerId
		  ,[CreateDt] = @CreateDt
		  ,[AuthStatus] = @AuthStatus
		  ,[CheckerId] = @CheckerId
		  ,[ApproveDt] = @ApproveDt
	WHERE Id = @Id
commit transaction
	select '0' as Result, N'' as ErrorDesc, @id as ID
end try
begin catch

rollback transaction

end catch
GO
