const Payment = require('../models/paymentModel');

exports.createPayment = async (req, res) => {
  const { order_id, amount, payment_method, transaction_id, status } = req.body;
  try {
    const paymentId = await Payment.create(order_id, amount, payment_method, transaction_id, status);
    res.status(201).json({ message: 'Payment created successfully', paymentId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePayment = async (req, res) => {
  const { order_id, amount, payment_method, transaction_id, status } = req.body;
  try {
    const affectedRows = await Payment.update(req.params.id, order_id, amount, payment_method, transaction_id, status);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const affectedRows = await Payment.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
