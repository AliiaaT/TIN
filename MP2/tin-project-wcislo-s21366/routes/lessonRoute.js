const express = require('express');
const router = express.Router();

const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.showLessonList);
router.get('/details/:lesId', lessonController.showLessonDetails);
router.get('/add', lessonController.showAddLessonForm);
router.get('/edit/:lesId', lessonController.showEditLessonForm);


router.post('/add', lessonController.addLesson);
router.post('/edit', lessonController.updateLesson);
router.get('/delete/:lesId', lessonController.deleteLesson);

module.exports = router;