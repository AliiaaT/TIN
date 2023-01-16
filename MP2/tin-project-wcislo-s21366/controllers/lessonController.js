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

exports.showLessonDetails = (req, res, next) => {
    const lesId = req.params.lesId;
    LessonRepository.getLessonById(lesId)
        .then(lesson => {
            res.render('LessonsPage/form', {
                lesson: lesson,
                students: [],
                instructors: [],
                formMode: 'showDetails',
                pageTitle: 'Lesson details',
                formAction: '',
                navLocation: 'lesson'
            });
        });
}

exports.showAddLessonForm = (req, res, next) => {
    LessonRepository.getAllStudentsAndInstructors().then(result => {
        res.render('LessonsPage/form', {
            lesson: {},
            students: result.students,
            instructors: result.instructors,
            pageTitle : 'New Lesson',
            formMode: 'createNew',
            btnLabel: 'Add new lesson',
            formAction: '/lesson/add',
            navLocation: 'lesson'
        });
    })
}

exports.showEditLessonForm = (req, res, next) => {
    const lesId = req.params.lesId;
    LessonRepository.getLessonById(lesId)
        .then(lesson => {
            LessonRepository.getAllStudentsAndInstructors().then(result => {
                res.render('LessonsPage/form', {
                    lesson: lesson,
                    students: result.students,
                    instructors: result.instructors,
                    formMode: 'edit',
                    pageTitle: 'Edit lesson',
                    btnLabel: 'Edit lesson',
                    formAction: '/lesson/edit',
                    navLocation: 'lesson'
                });
            })
        });
}


exports.addLesson = (req, res, next) => {
    const lesData = {...req.body};
    LessonRepository.creteLesson(lesData).then( result => {
        res.redirect("/lesson");
    });
};

exports.updateLesson = (req, res, next) => {
    const lesId = req.body._id;
    const lesData = {...req.body};
    LessonRepository.updateLesson(lesId, lesData).then( result => {
        res.redirect("/lesson");
    });
};

exports.deleteLesson = (req, res, next) => {
    const lesId = req.params.lesId;
    LessonRepository.deleteLesson(lesId).then( result => {
        res.redirect("/lesson");
    });
};
