const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.showVehicleList);
router.get('/details/:vehId', vehicleController.showVehicleDetails);
router.get('/add', vehicleController.showAddVehicleForm);
router.get('/edit/:vehId', vehicleController.showEditVehicleForm);

router.post('/add', vehicleController.addVehicle);
router.post('/edit', vehicleController.updateVehicle);
router.get('/delete/:vehId', vehicleController.deleteVehicle);

module.exports = router;