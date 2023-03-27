# CropTrack - Sensor Data Monitoring System for Farmers

CropTrack is a sensor data monitoring system for farmers that helps monitor crop conditions using ultrasonic sensor, LM35, and DHT11 sensors. This project includes both hardware and software components.

## Tech Stack
- Raspberry Pi
- Ultrasonic Sensor
- DHT11 Sensor
- LM35 Sensor
- Node.js
- Express.js
- React.js

## Hardware Setup
1. Connect the ultrasonic sensor to the Raspberry Pi's GPIO pins.
2. Connect the DHT11 and LM35 sensors to the Raspberry Pi's GPIO pins.
3. Build the circuit according to the following schematic:

[Raspberry Pi] --- [Ultrasonic Sensor] --- [DHT11 Sensor] --- [LM35 Sensor]


## Software Setup

1. Clone the repository onto your RaspberryPi.
2. Install Node.js and NPM if not already installed.
3. Install project dependencies by running `npm install` in the root directory.
4. Start the server by running `npm run start:server` in the root directory.
5. Start the client by running `npm run start:client` in the root directory.

## Usage
- The sensor data can be accessed through the client application running on `http://localhost:3000`.
- The server exposes a RESTful API to receive and retrieve sensor data.
- To add new sensor data, send a POST request to `http://localhost:3000/sensordata` with the following JSON payload:

{
"timestamp": "2022-03-27T12:00:00Z",
"temperature": 25,
"humidity": 60,
"distance": 10
}


Note: `timestamp` should be in ISO 8601 format.

- To retrieve all sensor data, send a GET request to `http://localhost:3000/sensordata`.

## Authors
- [Swapnil Jadhav](https://github.com/Swapnil-2503)



