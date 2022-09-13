

-- SIGNIN

CREATE PROCEDURE signin @email NVARCHAR(100), @password NVARCHAR(100)

AS

SELECT * FROM Users WHERE email=@email AND password=@password

GO

-- SIGN UP USER


CREATE PROCEDURE signup @name NVARCHAR(100),@email NVARCHAR(100),@password NVARCHAR(200)

AS

    INSERT INTO Users(name,email,password)

    VALUES(@name, @email,@password)

GO