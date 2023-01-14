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
                pageTitle: 'Student details',
                formAction: '',
                navLocation: 'student',
                validationErrors: []
            });
        });
};

exports.showAddStudentForm = (req, res, next) => {
    res.render('studentsPage/form', {
        stud: {},
        pageTitle : 'New Student',
        formMode: 'createNew',
        btnLabel: 'Add new student',
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
                pageTitle: 'Edit student',
                btnLabel: 'Edit student',
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
                e.message = "The Phone Number you entered is already in use.";
            }
         });
        res.render('studentsPage/form', {
            stud: stuData,
            formMode: 'edit',
            pageTitle: 'Edit student',
            btnLabel: 'Edit student',
            formAction: '/student/edit',
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
                e.message = "The Phone Number you entered is already in use.";
            }
         });
        res.render('studentsPage/form', {
            stud: stuData,
            pageTitle : 'New Student',
            formMode: 'createNew',
            btnLabel: 'Add new student',
            formAction: '/student/add',
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

