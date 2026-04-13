const db = require('../config/db');

const Order = {
  create: async (user_id, vehicle_id, total_amount, status = 'pending') => {
    try {
      const [result] = await db.execute(
        'INSERT INTO orders (user_id, vehicle_id, total_amount, status) VALUES (?, ?, ?, ?)',
        [user_id, vehicle_id, total_amount, status]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await db.execute(
        'SELECT o.*, u.username, v.year, v.brand_id, v.model_id FROM orders o JOIN users u ON o.user_id = u.id JOIN vehicles v ON o.vehicle_id = v.id'
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const [rows] = await db.execute(
        'SELECT o.*, u.username, v.year, v.brand_id, v.model_id FROM orders o JOIN users u ON o.user_id = u.id JOIN vehicles v ON o.vehicle_id = v.id WHERE o.id = ?',
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  update: async (id, user_id, vehicle_id, total_amount, status) => {
    try {
      const [result] = await db.execute(
        'UPDATE orders SET user_id = ?, vehicle_id = ?, total_amount = ?, status = ? WHERE id = ?',
        [user_id, vehicle_id, total_amount, status, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM orders WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Order;
