const db = require('../config/db');

const Brand = {
  create: async (name) => {
    try {
      const [result] = await db.execute('INSERT INTO brands (name) VALUES (?)', [name]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },
  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM brands');
      return rows;
    } catch (error) {
      throw error;
    }
  },
  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT * FROM brands WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  update: async (id, name) => {
    try {
      const [result] = await db.execute('UPDATE brands SET name = ? WHERE id = ?', [name, id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM brands WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

const Model = {
  create: async (brand_id, name) => {
    try {
      const [result] = await db.execute('INSERT INTO models (brand_id, name) VALUES (?, ?)', [brand_id, name]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },
  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT m.*, b.name as brand_name FROM models m JOIN brands b ON m.brand_id = b.id');
      return rows;
    } catch (error) {
      throw error;
    }
  },
  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT m.*, b.name as brand_name FROM models m JOIN brands b ON m.brand_id = b.id WHERE m.id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  update: async (id, brand_id, name) => {
    try {
      const [result] = await db.execute('UPDATE models SET brand_id = ?, name = ? WHERE id = ?', [brand_id, name, id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM models WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

const Color = {
  create: async (name) => {
    try {
      const [result] = await db.execute('INSERT INTO colors (name) VALUES (?)', [name]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },
  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM colors');
      return rows;
    } catch (error) {
      throw error;
    }
  },
  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT * FROM colors WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  update: async (id, name) => {
    try {
      const [result] = await db.execute('UPDATE colors SET name = ? WHERE id = ?', [name, id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM colors WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

const VehicleStatus = {
  create: async (status_name) => {
    try {
      const [result] = await db.execute('INSERT INTO vehicle_statuses (status_name) VALUES (?)', [status_name]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },
  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM vehicle_statuses');
      return rows;
    } catch (error) {
      throw error;
    }
  },
  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT * FROM vehicle_statuses WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  update: async (id, status_name) => {
    try {
      const [result] = await db.execute('UPDATE vehicle_statuses SET status_name = ? WHERE id = ?', [status_name, id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM vehicle_statuses WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = { Brand, Model, Color, VehicleStatus };
