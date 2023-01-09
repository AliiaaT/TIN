const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.showStudentList);
router.get('/details/:stuId', studentController.showStudentDetails);
router.get('/add', studentController.showAddStudentForm);
router.get('/edit/:stuId', studentController.showEditStudentForm);

module.exports = router;