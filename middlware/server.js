const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'saad',
port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE Username='${username}' AND Pass='${password}'`;
  
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing login query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (result.length > 0) {
        res.send('Login successful');
      } else {
        res.status(401).send('Invalid credentials. Please check your username and password.');
      }
    });
  });


  app.post('/book-appointment', async (req, res) => {
    try {
      const appointmentData = req.body;
  

        // Date and time are available, proceed with booking the appointment
        const insertQuery = `INSERT INTO Appointment (UserID, StartTime, EndTime, DoctorAssigned, DateOfAppointment, DateOfBirth, PhoneNumber, HealthCard, FirstName, LastName) VALUES (${appointmentData.userId}, '${appointmentData.startTime}', '${appointmentData.endTime}', '${appointmentData.doctorAssigned}', '${appointmentData.dateOfAppointment}', '${appointmentData.dateOfBirth}', ${appointmentData.phoneNumber}, ${appointmentData.healthCard}, '${appointmentData.firstName}', '${appointmentData.lastName}')`;
  
        await new Promise((resolve, reject) => {
          db.query(insertQuery, (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
  
        res.status(200).send('Appointment booked successfully');
      
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  



app.get('/get-user/:userId', (req, res) => {
    const userId = req.params.userId;
  
    const query = `SELECT * FROM users WHERE UserID='${userId}'`;
  
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing get-user query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (result.length > 0) {
        const userData = result[0]; // Assuming the user ID is unique
        res.status(200).json({
          userId: userData.UserID,
          firstName: userData.FirstName,
          lastName: userData.LastName,
          dateOfBirth: userData.DateOfBirth,
          phoneNumber: userData.PhoneNumber,
           
        });
      } else {
        res.status(404).send('User not found');
      }
    });
  });

  app.get('/check-availability', (req, res) => {
    const { dateOfAppointment, startTime } = req.query; // Assuming dateTime is a string in ISO format
  
    // Check if the date and time are available
    const availabilityQuery = `SELECT * FROM Appointment WHERE DateOfAppointment='${dateOfAppointment}' AND StartTime='${startTime}'`;


  
    db.query(availabilityQuery, (availabilityErr, availabilityResult) => {
      if (availabilityErr) {
        console.error('Error checking availability:', availabilityErr);
        res.status(500).json({ isAvailable: false, error: 'Error checking availability' });
        return;
      }
  
      const isAvailable = availabilityResult.length === 0;
      res.status(200).json({ isAvailable });
    });
  });
  


  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
