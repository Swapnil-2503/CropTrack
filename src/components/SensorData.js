import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SensorData = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchSensorData = async () => {
      const response = await axios.get('http://localhost:3000/sensor-data');
      setSensorData(response.data);
    };
    fetchSensorData();
  }, []);

  return (
    <div>
      <h2>Sensor Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((data) => (
            <tr key={data.id}>
              <td>{data.timestamp}</td>
              <td>{data.temperature}</td>
              <td>{data.humidity}</td>
              <td>{data.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorData;
