import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch orders');
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      {message && <p>{message}</p>}
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>
              Order ID: {order.id} - User: {order.username} - Total: ${order.total_amount} - Status: {order.status}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
