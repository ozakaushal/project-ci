create proc sp_salesByYear(@year int)
as
begin
	select Orders.OrderDate,sum([Order Details].UnitPrice*[Order Details].Quantity) as TotalSale from [Order Details]
	inner join Orders
	on [Order Details].OrderID = Orders.OrderID
	where Year(Orders.OrderDate)  = @year
	group by Orders.OrderDate
end


exec sp_salesByYear 1996