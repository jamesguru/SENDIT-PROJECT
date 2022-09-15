-- CREATE NOTIFICATIONS

CREATE PROCEDURE addNotifications @trackId VARCHAR(200),@email VARCHAR(200),@message VARCHAR(500)
    AS
    INSERT INTO Notifications(trackId,email,message)
    VALUES(@trackId,@email,@message)

-- GET NOTIFICATIONS

CREATE PROCEDURE getNotifications
AS
SELECT * FROM Notifications

-- DELETE NOTIFICATIONS

CREATE PROCEDURE deleteNotifications @trackId VARCHAR(100)
AS

DELETE FROM Notifications WHERE trackId=@trackId