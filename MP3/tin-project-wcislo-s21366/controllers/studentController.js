const StudentRepository = require('../repository/sequelize/StudentRepository')


exports.showStudentList = (req, res, next) => {
    console.log("showStudentList")
    StudentRepository.getStudents()
        .then(studs => {
            res.render('studentsPage/students', {
                studs: studs,
                navLocation: 'student'
            });
        })
}

exports.showStudentDetails = (req, res, next) => {
    const stuId = req.params.stuId;
    console.log("showStudentDetails")
    StudentRepository.getStudentById(stuId)
        .then(stud => {
            console.log(stud)
            res.render('studentsPage/form', {
                stud: stud,
                formMode: 'showDetails',
                pageTitle: req.__('students-page.details-student-page-title'),
                formAction: '',
                navLocation: 'student',
                validationErrors: []
            });
        });
};

exports.showAddStudentForm = (req, res, next) => {
    res.render('studentsPage/form', {
        stud: {},
        pageTitle: req.__('students-page.add-student-page-title'),
        formMode: 'createNew',
        btnLabel: req.__('students-page.buttons.add-new-student'),
        formAction: '/student/add',
        navLocation: 'student',
        validationErrors: []
    });
}


exports.showEditStudentForm = (req, res, next) => {
    const stuId = req.params.stuId;
    StudentRepository.getStudentById(stuId)
        .then(stud => {
            res.render('studentsPage/form', {
                stud: stud,
                formMode: 'edit',
                pageTitle: req.__('students-page.edit-student-page-title'),
                btnLabel: req.__('students-page.buttons.edit-student'),
                formAction: '/student/edit',
                navLocation: 'student',
                validationErrors: []
            });

        });
};

exports.addStudent = (req, res, next) => {
    const stuData = {...req.body};
    StudentRepository.createStudent(stuData).then( result => {
        res.redirect("/student");
    }).catch(err => {
        err.errors.forEach(e => {
            if(e.path.includes('phoneNumber') && e.type == 'unique violation') {
                e.message = req.__('errors.phone-already-in-use');
            }
            if(e.path.includes('email') && e.type == 'unique violation') {
                e.message = req.__('errors.email-already-in-use');
            }
            console.log("Error occured")
            console.log(e)
            // if(e.path.includes('birthDate')) {
            //     e.message = "birthDate error";
            // }
         });
         res.render('studentsPage/form', {
            stud: stuData,
            pageTitle: req.__('students-page.add-student-page-title'),
            formMode: 'createNew',
            btnLabel: req.__('students-page.buttons.add-new-student'),
            formAction: '/student/add',
            navLocation: 'student',
            validationErrors: err.errors
        });
    });
};

exports.updateStudent = (req, res, next) => {
    const stuId = req.body._id;
    const stuData = {...req.body};
    StudentRepository.updateStudent(stuId, stuData).then( result => {
        res.redirect("/student");
    }).catch(err => {
        console.log("updateStudent error");
        console.log(err);
        err.errors.forEach(e => {
            if(e.path.includes('phoneNumber') && e.type == 'unique violation') {
                e.message = req.__('errors.phone-already-in-use');
            }
            if(e.path.includes('email') && e.type == 'unique violation') {
                e.message = req.__('errors.email-already-in-use');
            }
         });
         res.render('studentsPage/form', {
            stud: stuData,
            formMode: 'edit',
            pageTitle: req.__('students-page.edit-student-page-title'),
            btnLabel: req.__('students-page.buttons.edit-student'),
            formAction: '/student/edit',
            navLocation: 'student',
            validationErrors: err.errors
        });
    });
};

exports.deleteStudent = (req, res, next) => {
    const stuId = req.params.stuId;
    StudentRepository.deleteStudent(stuId).then( result => {
        res.redirect("/student");
    });
};

