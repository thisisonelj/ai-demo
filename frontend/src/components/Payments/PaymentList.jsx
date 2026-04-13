import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payments');
        setPayments(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch payments');
      }
    };
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payment List</h2>
      {message && <p>{message}</p>}
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>
            <Link to={`/payments/${payment.id}`}>
              Payment ID: {payment.id} - Order: {payment.order_id} - User: {payment.username} - Amount: ${payment.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
