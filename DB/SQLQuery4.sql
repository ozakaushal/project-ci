create proc sp_updateIntoOrders
(
@ORDER_ID int,
@CUSTOMERID nvarchar(20),
@FREIGHT decimal(10,4)
)

as
begin
	update Orders
	set
	CustomerID = @CUSTOMERID, Freight = @FREIGHT
	where
	OrderID = @ORDER_ID


end

exec sp_updateIntoOrders 1234, 'HANAR', 21.22