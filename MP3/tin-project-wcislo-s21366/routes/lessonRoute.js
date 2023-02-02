const express = require('express');
const router = express.Router();

const lessonController = require('../controllers/lessonController');


const authUtil = require('../util/authUtils');

router.get('/', lessonController.showLessonList);
router.get('/details/:lesId', lessonController.showLessonDetails);
router.get('/add', authUtil.permitAuthenticatedAdminUser, lessonController.showAddLessonForm);
router.get('/edit/:lesId', authUtil.permitAuthenticatedAdminUser, lessonController.showEditLessonForm);

router.post('/add', authUtil.permitAuthenticatedAdminUser, lessonController.addLesson);
router.post('/edit', authUtil.permitAuthenticatedAdminUser, lessonController.updateLesson);
router.get('/delete/:lesId', authUtil.permitAuthenticatedAdminAndInstructorUser, lessonController.deleteLesson);

module.exports = router;