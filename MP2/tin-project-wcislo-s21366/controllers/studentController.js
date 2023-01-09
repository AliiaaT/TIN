const StudentRepository = require('../repository/sequelize/StudentRepository')


exports.showStudentList = (req, res, next) => {
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
    StudentRepository.getStudentById(stuId)
        .then(stud => {
            res.render('studentsPage/form', {
                stud: stud,
                formMode: 'showDetails',
                pageTitle: 'Student Details',
                formAction: '',
                navLocation: 'stud'
            });
        });
};

exports.showAddStudentForm = (req, res, next) => {
    res.render('studentsPage/form', {
        student: {},
        pageTitle : 'New Student',
        formMode: 'createNew',
        btnLabel: 'Add student',
        formAction: '/students/add',
        navLocation: 'student'
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
                formAction: './students/edit',
                navLocation: 'student'
            });

        });
};

