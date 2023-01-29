const ExamRepository = require('../repository/sequelize/ExamRepository')


exports.showExamList = (req, res, next) => {
    console.log(req.session.loggedUser)
    // logged user is student - show exams with him
    if (req.session.loggedUserType == "student") {
        ExamRepository.getExamByStuId(req.session.loggedUser._id)
        // ExamRepository.getExams()
            .then(exams => {
                res.render('examsPage/exams', {
                    exams: exams,
                    navLocation: 'exam'
                });
            })
    } else if (req.session.loggedUserType == "instructor") {
        ExamRepository.getExamByInsId(req.session.loggedUser._id)
        // ExamRepository.getExams()
            .then(exams => {
                res.render('examsPage/exams', {
                    exams: exams,
                    navLocation: 'exam'
                });
            })
    } else {
        // for admin show all exams
        ExamRepository.getExams()
        // ExamRepository.getExams()
            .then(exams => {
                res.render('examsPage/exams', {
                    exams: exams,
                    navLocation: 'exam'
                });
            })
    }
}

exports.showExamDetails = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.getExamById(examId)
        .then(exam => {
            res.render('examsPage/form', {
                exam: exam,
                students: [],
                instructors: [],
                formMode: 'showDetails',
                pageTitle: req.__('exams-page.details-exam-page-title'),
                formAction: '',
                navLocation: 'exam',
                validationErrors: []
            });
        });
}

exports.showAddExamForm = (req, res, next) => {
    ExamRepository.getAllStudentsInstructorsVehicles().then(result => {
        res.render('examsPage/form', {
            exam: {},
            students: result.students,
            instructors: result.instructors,
            vehicles: result.vehicles,
            pageTitle: req.__('exams-page.add-exam-page-title'),
            btnLabel: req.__('exams-page.buttons.add-new-exam'),
            formMode: 'createNew',
            formAction: '/exam/add',
            navLocation: 'exam',
            validationErrors: []
        });
    })
}

exports.showEditExamForm = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.getExamById(examId)
        .then(exam => {
            ExamRepository.getAllStudentsInstructorsVehicles().then(result => {
                res.render('examsPage/form', {
                    exam: exam,
                    students: result.students,
                    instructors: result.instructors,
                    vehicles: result.vehicles,
                    formMode: 'edit',
                    pageTitle: req.__('exams-page.edit-exam-page-title'),
                    btnLabel: req.__('exams-page.buttons.edit-exam'),
                    formAction: '/exam/edit',
                    navLocation: 'exam',
                    validationErrors: []
                });
            })
        });
}


exports.addExam = (req, res, next) => {
    const examData = {...req.body};
    console.log("addExam")
    console.log(examData)
    ExamRepository.creteExam(examData).then( result => {
        res.redirect("/exam");
    }).catch(err => {
        ExamRepository.getAllStudentsInstructorsVehicles().then(result => {
            res.render('examsPage/form', {
                exam: examData,
                students: result.students,
                instructors: result.instructors,
                vehicles: result.vehicles,
                pageTitle: req.__('exams-page.add-exam-page-title'),
                btnLabel: req.__('exams-page.buttons.add-new-exam'),
                formMode: 'edit',
                formAction: '/exam/add',
                navLocation: 'exam',
                validationErrors: err.errors
            });
        }); 
    });
};

exports.updateExam = (req, res, next) => {
    const examId = req.body._id;
    const examData = {...req.body};
    ExamRepository.updateExam(examId, examData).then( result => {
        res.redirect("/exam");
    }).catch(err => {
        ExamRepository.getAllStudentsInstructorsVehicles().then(result => {
            res.render('examsPage/form', {
                exam: examData,
                students: result.students,
                instructors: result.instructors,
                vehicles: result.vehicles,
                formMode: 'edit',
                pageTitle: req.__('exams-page.edit-exam-page-title'),
                btnLabel: req.__('exams-page.buttons.edit-exam'),
                formAction: '/exam/edit',
                navLocation: 'exam',
                validationErrors: err.errors
            });
        });
    });
};

exports.deleteExam = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.deleteExam(examId).then( result => {
        res.redirect("/exam");
    })
};
