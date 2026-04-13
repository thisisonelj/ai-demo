import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch order details');
      }
    };
    fetchOrder();
  }, [id]);

  if (!order) {
    return <div>{message || 'Loading...'}</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>User: {order.username}</p>
      <p>Vehicle: {order.year} {order.brand_id} {order.model_id}</p>
      <p>Total Amount: ${order.total_amount}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderDetail;
