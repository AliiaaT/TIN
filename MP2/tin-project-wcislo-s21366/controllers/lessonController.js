const LessonRepository = require('../repository/sequelize/LessonRepository')


exports.showLessonList = (req, res, next) => {
    LessonRepository.getLessons()
        .then(lessns => {
            res.render('LessonsPage/lesson', {
                lessns: lessns,
                navLocation: 'lesson'
            });
        })
}

exports.showAddLessonForm = (req, res, next) => {
    res.render('LessonsPage/form', {navLocation: 'lesson'});
}

exports.showLessonDetails = (req, res, next) => {
    res.render('LessonsPage/details', {navLocation: 'lesson'});
}


exports.showEditLessonForm = (req, res, next) => {
    res.render('LessonsPage/form-edit', {navLocation: 'lesson'});
}