const express = require('express');
const router = express.Router();

const lessonApiController = require('../../api/LessonAPI');

router.get('/', lessonApiController.getLessons);
router.get('/:lessonId', lessonApiController.getLessonById);
router.post('/', lessonApiController.createLesson);
router.put('/:lessonId', lessonApiController.updateLesson);
router.delete('/:lessonId', lessonApiController.deleteLesson);

module.exports = router;

