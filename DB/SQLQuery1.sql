create proc sp_printTables
as
begin
	select * from [dbo].[Categories]
	select * from [dbo].[Customers]
	select * from [dbo].[Employees]
	select * from [dbo].[EmployeeTerritories]
	select * from [dbo].[Order Details]
	--freight below
	select * from [dbo].[Orders]
	select * from [dbo].[Products]
	select * from [dbo].[Region]
	select * from [dbo].[Territories]
end

