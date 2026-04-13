import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PaymentDetail = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/payments/${id}`);
        setPayment(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch payment details');
      }
    };
    fetchPayment();
  }, [id]);

  if (!payment) {
    return <div>{message || 'Loading...'}</div>;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Payment ID: {payment.id}</p>
      <p>Order ID: {payment.order_id}</p>
      <p>User: {payment.username}</p>
      <p>Amount: ${payment.amount}</p>
      <p>Method: {payment.payment_method}</p>
      <p>Transaction ID: {payment.transaction_id}</p>
      <p>Status: {payment.status}</p>
    </div>
  );
};

export default PaymentDetail;
