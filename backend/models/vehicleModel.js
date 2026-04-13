const db = require('../config/db');

const Vehicle = {
  create: async (brand_id, model_id, color_id, status_id, year, price, description, stock) => {
    try {
      const [result] = await db.execute(
        'INSERT INTO vehicles (brand_id, model_id, color_id, status_id, year, price, description, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [brand_id, model_id, color_id, status_id, year, price, description, stock]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await db.execute(
        'SELECT v.*, b.name as brand_name, m.name as model_name, c.name as color_name, s.status_name FROM vehicles v LEFT JOIN brands b ON v.brand_id = b.id LEFT JOIN models m ON v.model_id = m.id LEFT JOIN colors c ON v.color_id = c.id LEFT JOIN vehicle_statuses s ON v.status_id = s.id'
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const [rows] = await db.execute(
        'SELECT v.*, b.name as brand_name, m.name as model_name, c.name as color_name, s.status_name FROM vehicles v LEFT JOIN brands b ON v.brand_id = b.id LEFT JOIN models m ON v.model_id = m.id LEFT JOIN colors c ON v.color_id = c.id LEFT JOIN vehicle_statuses s ON v.status_id = s.id WHERE v.id = ?',
        [id]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  update: async (id, brand_id, model_id, color_id, status_id, year, price, description, stock) => {
    try {
      const [result] = await db.execute(
        'UPDATE vehicles SET brand_id = ?, model_id = ?, color_id = ?, status_id = ?, year = ?, price = ?, description = ?, stock = ? WHERE id = ?',
        [brand_id, model_id, color_id, status_id, year, price, description, stock, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM vehicles WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Vehicle;
