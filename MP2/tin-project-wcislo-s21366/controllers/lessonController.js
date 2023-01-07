exports.showLessonList = (req, res, next) => {
    res.render('LessonsPage/lesson', {navLocation: 'lesson'});
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