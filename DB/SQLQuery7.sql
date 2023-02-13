create proc sp_salesByCategory(

@startDate datetime,
@endDate datetime

)

as

begin
	select Categories.CategoryName, sum([Order Details].UnitPrice * [Order Details].Quantity) as TotalSales from Categories
	inner join Products
	on Categories.CategoryID = Products.ProductID
	inner join [Order Details]
	on Products.ProductID = [Order Details].ProductID
	inner join Orders
	on Orders.OrderID = [Order Details].OrderID

	where Orders.OrderDate between @startDate and @endDate
	group by Categories.CategoryName
	
end


exec sp_salesByCategory '1997/07/04' , '1999/07/15'