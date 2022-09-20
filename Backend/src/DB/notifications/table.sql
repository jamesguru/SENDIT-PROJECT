CREATE TABLE Notifications(

    id INT IDENTITY(1,1) PRIMARY KEY,
    trackId VARCHAR(100),
    email VARCHAR(200) NOT NULL,
    message VARCHAR(5000) NOT NULL

)
