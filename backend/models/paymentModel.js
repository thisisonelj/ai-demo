const db = require('../config/db');

const Payment = {
  create: async (order_id, amount, payment_method, transaction_id, status = 'pending') => {
    try {
      const [result] = await db.execute(
        'INSERT INTO payments (order_id, amount, payment_method, transaction_id, status) VALUES (?, ?, ?, ?, ?)',
        [order_id, amount, payment_method, transaction_id, status]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT p.*, o.total_amount, u.username FROM payments p JOIN orders o ON p.order_id = o.id JOIN users u ON o.user_id = u.id');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT p.*, o.total_amount, u.username FROM payments p JOIN orders o ON p.order_id = o.id JOIN users u ON o.user_id = u.id WHERE p.id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  update: async (id, order_id, amount, payment_method, transaction_id, status) => {
    try {
      const [result] = await db.execute(
        'UPDATE payments SET order_id = ?, amount = ?, payment_method = ?, transaction_id = ?, status = ? WHERE id = ?',
        [order_id, amount, payment_method, transaction_id, status, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM payments WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Payment;
