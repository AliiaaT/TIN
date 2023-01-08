const express = require('express');
const router = express.Router();

const instApiController = require('../../api/InstructorAPI');

router.get('/', instApiController.getInstructors);
router.get('/:insId', instApiController.getInstructorById);
router.post('/', instApiController.createInstructor);
router.put('/:insId', instApiController.updateInstructor);
router.delete('/:insId', instApiController.deleteInstructor);

module.exports = router;

