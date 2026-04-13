import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleStatusList = () => {
  const [statuses, setStatuses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/basic-data/vehicle-statuses');
        setStatuses(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch vehicle statuses');
      }
    };
    fetchStatuses();
  }, []);

  return (
    <div>
      <h3>Vehicle Statuses</h3>
      {message && <p>{message}</p>}
      <ul>
        {statuses.map((status) => (
          <li key={status.id}>{status.status_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleStatusList;
