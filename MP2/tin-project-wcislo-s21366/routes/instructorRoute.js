const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.showInstructorList);
router.get('/details/:insId', instructorController.showInstructorDetails);
router.get('/add', instructorController.showAddInstructorForm);
router.get('/edit/:insId', instructorController.showEditInstructorForm);

router.post('/add', instructorController.addInstructor);
router.post('/edit', instructorController.updateInstructor);
router.get('/delete/:insId', instructorController.deleteInstructor);

module.exports = router;