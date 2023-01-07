const express = require('express');
const router = express.Router();

const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.showLessonList);
router.get('/details/:lesId', lessonController.showLessonDetails);
router.get('/add', lessonController.showAddLessonForm);
router.get('/edit', lessonController.showEditLessonForm);

module.exports = router;