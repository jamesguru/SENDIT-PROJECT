CREATE TABLE Notifications(

    id IDENTITY(1,1) NOT NULL,
    trackId VARCHAR(100),
    email VARCHAR(200) NOT NULL,
    message VARCHAR(5000) NOT NULL

)
