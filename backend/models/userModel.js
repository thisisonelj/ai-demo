const db = require('../config/db');

const User = {
  create: async (username, password, email, role = 'user') => {
    try {
      const [result] = await db.execute(
        'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)',
        [username, password, email, role]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  findByUsername: async (username) => {
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    try {
      const [rows] = await db.execute('SELECT * FROM users');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, username, email, role) => {
    try {
      const [result] = await db.execute(
        'UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?',
        [username, email, role, id]
      );
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
      return result.affectedRows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = User;
