/*1. Create a stored procedure in the Northwind database that will calculate the average
value of Freight for a specified customer.Then, a business rule will be added that will
be triggered before every Update and Insert command in the Orders controller,and
will use the stored procedure to verify that the Freight does not exceed the average
freight. If it does, a message will be displayed and the command will be cancelled.*/

alter proc sp_validation (@CUSTOMER_ID nvarchar(20))

as
begin
	select Customers.ContactName, avg(Orders.Freight) as AverageFreight from Customers
	inner join Orders
	on Customers.CustomerID = Orders.CustomerID
	where Customers.CustomerID = @CUSTOMER_ID
	group by Customers.ContactName


	
end