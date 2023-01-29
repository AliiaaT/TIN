const express = require('express');
const router = express.Router();

const lessonController = require('../controllers/lessonController');


const authUtil = require('../util/authUtils');

router.get('/', lessonController.showLessonList);
router.get('/details/:lesId', lessonController.showLessonDetails);
router.get('/add', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.showAddLessonForm);
router.get('/edit/:lesId', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.showEditLessonForm);


router.post('/add', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.addLesson);
router.post('/edit', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.updateLesson);
router.get('/delete/:lesId', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.deleteLesson);

module.exports = router;