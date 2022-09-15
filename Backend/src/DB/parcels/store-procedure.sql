-- GET ALL PROCEDURE


CREATE PROCEDURE getAllParcels

AS 
 SELECT * From parcels WHERE deleted=0


-- SOFT DELETE

CREATE PROCEDURE softDelete @id INT,@deleted INT

AS
    UPDATE Parcels SET deleted = @deleted WHERE id=@id

--GET PARCELS OWNED BY USER

CREATE PROCEDURE getParcelsForUser @email VARCHAR(100)

AS
SELECT * FROM parcels WHERE (senderEmail=@email OR receiverEmail=@email) AND deleted=0

-- DELETE PARCELS

CREATE PROCEDURE deleteParcels @id INT

AS 
 
 DELETE FROM parcels WHERE id=@id

-- UPDATE AND INSERT

 CREATE PROCEDURE insertUpdateParcel(
@id INT ,
@senderEmail VARCHAR(200),
@receiverEmail VARCHAR(200),
@trackId VARCHAR (200),
@location VARCHAR (200),
@destination VARCHAR(200),
@dispatchedDate VARCHAR (200),
@weight INT,
@price INT ,
@markers VARCHAR(200),
@status INT,
@deleted INT)
AS
BEGIN
DECLARE @variableId BIT
SELECT @variableId = COUNT(id) FROM parcels WHERE id=@id
IF @variableId=0
BEGIN
INSERT INTO parcels(id,senderEmail,receiverEmail,trackId,location,destination,dispatchedDate,weight,price,markers,status,deleted)
VALUES(@id,@senderEmail,@receiverEmail,@trackId,@location,@destination,@dispatchedDate,@weight,@price,@markers,@status,@deleted)
END
ELSE 
BEGIN
UPDATE [parcels]
SET
status=@status
WHERE @id=id
END
END



{
    
"id":11,
"senderEmail":"jameskagunga2022@gmail.com",
"receiverEmail":"Mwathi@kagunga@gmail.com",
"trackId":"collins@gmail.com",
"location":"Nairobi",
"destination":"Mombasa",
"dispatchedDate":"2022-10-12",
"weight":29,
"price":200,
"markers":"[longitude and latitude]",
"status":0,
"deleted":0

}