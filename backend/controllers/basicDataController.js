const { Brand, Model, Color, VehicleStatus } = require('../models/basicDataModel');

// Brand Controllers
exports.createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const brandId = await Brand.create(name);
    res.status(201).json({ message: 'Brand created successfully', brandId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const affectedRows = await Brand.update(req.params.id, name);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json({ message: 'Brand updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const affectedRows = await Brand.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json({ message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Model Controllers
exports.createModel = async (req, res) => {
  const { brand_id, name } = req.body;
  try {
    const modelId = await Model.create(brand_id, name);
    res.status(201).json({ message: 'Model created successfully', modelId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllModels = async (req, res) => {
  try {
    const models = await Model.findAll();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    if (!model) {
      return res.status(404).json({ message: 'Model not found' });
    }
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateModel = async (req, res) => {
  const { brand_id, name } = req.body;
  try {
    const affectedRows = await Model.update(req.params.id, brand_id, name);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Model not found' });
    }
    res.status(200).json({ message: 'Model updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    const affectedRows = await Model.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Model not found' });
    }
    res.status(200).json({ message: 'Model deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Color Controllers
exports.createColor = async (req, res) => {
  const { name } = req.body;
  try {
    const colorId = await Color.create(name);
    res.status(201).json({ message: 'Color created successfully', colorId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllColors = async (req, res) => {
  try {
    const colors = await Color.findAll();
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    if (!color) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateColor = async (req, res) => {
  const { name } = req.body;
  try {
    const affectedRows = await Color.update(req.params.id, name);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json({ message: 'Color updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteColor = async (req, res) => {
  try {
    const affectedRows = await Color.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json({ message: 'Color deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Vehicle Status Controllers
exports.createVehicleStatus = async (req, res) => {
  const { status_name } = req.body;
  try {
    const statusId = await VehicleStatus.create(status_name);
    res.status(201).json({ message: 'Vehicle status created successfully', statusId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllVehicleStatuses = async (req, res) => {
  try {
    const statuses = await VehicleStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVehicleStatusById = async (req, res) => {
  try {
    const status = await VehicleStatus.findById(req.params.id);
    if (!status) {
      return res.status(404).json({ message: 'Vehicle status not found' });
    }
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVehicleStatus = async (req, res) => {
  const { status_name } = req.body;
  try {
    const affectedRows = await VehicleStatus.update(req.params.id, status_name);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Vehicle status not found' });
    }
    res.status(200).json({ message: 'Vehicle status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVehicleStatus = async (req, res) => {
  try {
    const affectedRows = await VehicleStatus.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Vehicle status not found' });
    }
    res.status(200).json({ message: 'Vehicle status deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
