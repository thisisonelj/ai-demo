const User = require('../models/userModel');
// const bcrypt = require('bcryptjs'); // In a real app, use bcrypt for password hashing

exports.registerUser = async (req, res) => {
  const { username, password, email, role } = req.body;
  try {
    // In a real app, hash the password: const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password; // Placeholder
    const userId = await User.create(username, hashedPassword, email, role);
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // In a real app, compare hashed password: const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = (password === user.password); // Placeholder
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // In a real app, generate JWT token
    res.status(200).json({ message: 'Logged in successfully', user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { username, email, role } = req.body;
  try {
    const affectedRows = await User.update(req.params.id, username, email, role);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const affectedRows = await User.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
