const express = require('express');
const router = express.Router();

const stuApiController = require('../../api/StudentAPI');

router.get('/', stuApiController.getStudents);
router.get('/:stuId', stuApiController.getStudentById);
router.post('/', stuApiController.createStudent);
router.put('/:stuId', stuApiController.updateStudent);
router.delete('/:stuId', stuApiController.deleteStudent);

module.exports = router;

