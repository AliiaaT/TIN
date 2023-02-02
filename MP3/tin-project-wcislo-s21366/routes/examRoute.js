const express = require('express');
const router = express.Router();

const examController = require('../controllers/examController');


const authUtil = require('../util/authUtils');

router.get('/', examController.showExamList);
router.get('/details/:examId', examController.showExamDetails);
router.get('/add', authUtil.permitAuthenticatedAdminUser, examController.showAddExamForm);
router.get('/edit/:examId', authUtil.permitAuthenticatedAdminUser, examController.showEditExamForm);


router.post('/add', authUtil.permitAuthenticatedAdminUser, examController.addExam);
router.post('/edit', authUtil.permitAuthenticatedAdminUser, examController.updateExam);
router.get('/delete/:examId', authUtil.permitAuthenticatedAdminAndInstructorUser, examController.deleteExam);

module.exports = router;