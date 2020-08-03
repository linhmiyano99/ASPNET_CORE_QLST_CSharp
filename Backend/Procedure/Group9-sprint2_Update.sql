USE [DbPratice]
GO
/****** Object:  StoredProcedure [dbo].[Hang_Group9ById]    Script Date: 7/16/2020 10:22:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------[dbo].[Group9Hang_ById] 6/17/2020----------------

ALTER   proc [dbo].[Hang_Group9ById]
    @Ma int = NULL
as
begin
select *
from Hang where Hang.Ma = @Ma
end