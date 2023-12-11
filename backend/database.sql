CREATE DATABASE SAAD;

USE SAAD;


CREATE TABLE Users(
	UserID BIGINT PRIMARY KEY,
    UserType VARCHAR(20),
    Username VARCHAR(20),
    Pass BIGINT,
    FirstName VARCHAR(20),
    LastName VARCHAR(20)
);

CREATE TABLE Appointment(
	AppointmentID BIGINT PRIMARY KEY AUTO_INCREMENT,
    UserID BIGINT,
    StartTime VARCHAR(10),
    EndTime VARCHAR(10),
    DoctorAssigned VARCHAR(30),
    DateOfAppointment DATE,
    DateOfBirth DATE,
    PhoneNumber BIGINT,
    HealthCard BIGINT,
    FirstName VARCHAR(20),
    LastName VARCHAR(20),
    FOREIGN KEY(UserID) REFERENCES Users(UserID) ON UPDATE CASCADE ON DELETE CASCADE
);



INSERT INTO Users(
	UserID,
    UserType,
    Username,
    Pass,
    FirstName,
    LastName
)
VALUES
(1001, "Receptionist", "recp", 1234, "Angelina", "Jolie"),
(1002, "Patient", "pat", 5678, "Ben", "Dover"),
(1003, "Family Member", "fam", 4268, "Saul", "Goodman");


INSERT INTO Appointment(
	AppointmentID,
    UserID,
    StartTime,
    EndTime,
    DoctorAssigned,
    DateOfAppointment,
    DateOfBirth,
    PhoneNumber,
    HealthCard,
    FirstName,
    LastName
)
VALUES
(5001, 1001, "9:00 AM", "10 AM", "Dr. Heisenberg", '2023-12-07', '2002-11-12', 5647596842, 4423578964, "Ben", "Dover"),
(5002, 1001, "12:00 PM", "1 PM", "Dr. Heisenberg", '2023-12-07', '2001-06-05', 2254489654, 1123654789, "John", "Cena"),
(5003, 1002, "11:00 AM", "12 PM", "Dr. Los Pollos Hermanos", '2023-12-09', '2002-11-12', 5647596842, 4423578964, "Ben", "Dover"),
(5004, 1003, "4:00 PM", "5 PM", "Dr. Heisenberg", '2023-12-11', '2002-11-12', 5647596842, 4423578964, "Ben", "Dover");

SELECT * FROM Users;
SELECT * FROM Appointment;