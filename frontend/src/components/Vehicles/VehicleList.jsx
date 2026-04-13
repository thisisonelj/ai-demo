import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setVehicles(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch vehicles');
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Vehicle List</h2>
      {message && <p>{message}</p>}
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>
              {vehicle.year} {vehicle.brand_name} {vehicle.model_name} - ${vehicle.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
