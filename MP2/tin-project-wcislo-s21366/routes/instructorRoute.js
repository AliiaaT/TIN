const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.showInstructorList);
router.get('/details/:insId', instructorController.showInstructorDetails);
router.get('/add', instructorController.showAddInstructorForm);
router.get('/edit', instructorController.showEditInstructorForm);

module.exports = router;