const express = require('express');
const router = express.Router();
const basicDataController = require('../controllers/basicDataController');

// Brand Routes
router.post('/brands', basicDataController.createBrand);
router.get('/brands', basicDataController.getAllBrands);
router.get('/brands/:id', basicDataController.getBrandById);
router.put('/brands/:id', basicDataController.updateBrand);
router.delete('/brands/:id', basicDataController.deleteBrand);

// Model Routes
router.post('/models', basicDataController.createModel);
router.get('/models', basicDataController.getAllModels);
router.get('/models/:id', basicDataController.getModelById);
router.put('/models/:id', basicDataController.updateModel);
router.delete('/models/:id', basicDataController.deleteModel);

// Color Routes
router.post('/colors', basicDataController.createColor);
router.get('/colors', basicDataController.getAllColors);
router.get('/colors/:id', basicDataController.getColorById);
router.put('/colors/:id', basicDataController.updateColor);
router.delete('/colors/:id', basicDataController.deleteColor);

// Vehicle Status Routes
router.post('/vehicle-statuses', basicDataController.createVehicleStatus);
router.get('/vehicle-statuses', basicDataController.getAllVehicleStatuses);
router.get('/vehicle-statuses/:id', basicDataController.getVehicleStatusById);
router.put('/vehicle-statuses/:id', basicDataController.updateVehicleStatus);
router.delete('/vehicle-statuses/:id', basicDataController.deleteVehicleStatus);

module.exports = router;
