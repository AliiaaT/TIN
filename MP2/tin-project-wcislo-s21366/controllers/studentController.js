exports.showStudentList = (req, res, next) => {
    res.render('studentsPage/students', {navLocation: 'student'});
}

exports.showStudentDetails = (req, res, next) => {
    res.render('studentsPage/details', {navLocation: 'student'});
}

exports.showAddStudentForm = (req, res, next) => {
    res.render('studentsPage/form', {navLocation: 'student'});
}


exports.showEditStudentForm = (req, res, next) => {
    res.render('studentsPage/form-edit', {navLocation: 'student'});
}

