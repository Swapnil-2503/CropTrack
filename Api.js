const express = require('express');
const app = express();
const port = 3000;

const sensorData = []; // An array to hold the sensor data

// Add middleware to parse incoming JSON data
app.use(express.json());

// Define a route to add sensor data to the array
app.post('/sensordata', (req, res) => {
  const data = req.body;
  sensorData.push(data);
  res.send('Data added successfully');
});

// Define a route to get all sensor data from the array
app.get('/sensordata', (req, res) => {
  res.json(sensorData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
