const Vehicle = require('../models/vehicleModel');

exports.createVehicle = async (req, res) => {
  const { brand_id, model_id, color_id, status_id, year, price, description, stock } = req.body;
  try {
    const vehicleId = await Vehicle.create(brand_id, model_id, color_id, status_id, year, price, description, stock);
    res.status(201).json({ message: 'Vehicle created successfully', vehicleId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVehicle = async (req, res) => {
  const { brand_id, model_id, color_id, status_id, year, price, description, stock } = req.body;
  try {
    const affectedRows = await Vehicle.update(req.params.id, brand_id, model_id, color_id, status_id, year, price, description, stock);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json({ message: 'Vehicle updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const affectedRows = await Vehicle.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
