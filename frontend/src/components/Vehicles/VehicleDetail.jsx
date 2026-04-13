import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/vehicles/${id}`);
        setVehicle(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch vehicle details');
      }
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <div>{message || 'Loading...'}</div>;
  }

  return (
    <div>
      <h2>Vehicle Details</h2>
      <p>Brand: {vehicle.brand_name}</p>
      <p>Model: {vehicle.model_name}</p>
      <p>Color: {vehicle.color_name}</p>
      <p>Year: {vehicle.year}</p>
      <p>Price: ${vehicle.price}</p>
      <p>Description: {vehicle.description}</p>
      <p>Stock: {vehicle.stock}</p>
      <p>Status: {vehicle.status_name}</p>
    </div>
  );
};

export default VehicleDetail;
