CREATE TABLE Parcels(

    id int PRIMARY KEY,
    senderEmail VARCHAR(100) NOT NULL,
    receiverEmail VARCHAR(200) NOT NULL,
    trackId VARCHAR(200) NOT NULL,
    location VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    dispatchedDate VARCHAR(100) NOT NULL,
    weight int NOT NULL,
    price int NOT NULL,
    markers VARCHAR(1000) NOT NULL,
    status int NOT NULL,
    deleted int NOT NULL

)