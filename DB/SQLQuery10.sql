create proc sp_salesByCountry(@country nvarchar(20))
as
begin
	select Orders.ShipCountry, sum([Order Details].UnitPrice*[Order Details].Quantity) from Orders
	inner join [Order Details]
	on Orders.OrderID = [Order Details].OrderID
	where Orders.ShipCountry = @country
	group by Orders.ShipCountry
end

exec sp_salesByCountry 'France'