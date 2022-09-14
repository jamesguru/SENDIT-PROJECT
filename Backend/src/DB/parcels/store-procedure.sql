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
SELECT * FROM parcels WHERE senderEmail=@email OR receiverEmail=@email

-- DELETE PARCELS

CREATE PROCEDURE deleteParcels @id INT

AS 
 
 DELETE FROM parcels WHERE id=@id

-- UPDATE AND INSERT

 CREATE PROCEDURE insertUpdateParcel(
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
SELECT @variableId = COUNT(trackId) FROM parcels WHERE trackId=@trackId
IF @variableId=0
BEGIN
INSERT INTO parcels(senderEmail,receiverEmail,trackId,location,destination,weight,price,markers,status,deleted)
VALUES(@senderEmail,@receiverEmail,@trackId,@location,@destination,@weight,@price,@markers,@status,@deleted)
END
ELSE 
BEGIN
UPDATE [parcels]
SET
status=@status
END

END