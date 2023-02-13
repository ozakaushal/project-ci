CREATE or ALTER PROCEDURE sp_updateDetails 
(
	@OrderID INT,
	@ProductID INT, 
	@UnitPrice MONEY ,
	@Quantity SMALLINT ,
	@Discount REAL
)

AS 
	BEGIN 
		UPDATE [Order Details] 
		SET 
		UnitPrice = @UnitPrice, 
		Quantity = @Quantity , 
		Discount = @Discount 
		WHERE ProductID = @ProductID 
END

sp_updateDetails  10249 , 11 , 69.76 ,9 , 0
SELECT * FROM [Order Details]