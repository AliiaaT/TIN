exports.showInstructorList = (req, res, next) => {
    res.render('intructorPage/instructor', {navLocation: 'instructor'});
}

exports.showAddInstructorForm = (req, res, next) => {
    res.render('intructorPage/form', {navLocation: 'instructor'});
}

exports.showInstructorDetails = (req, res, next) => {
    res.render('intructorPage/details', {navLocation: 'instructor'});
}


exports.showEditInstructorForm = (req, res, next) => {
    res.render('intructorPage/form-edit', {navLocation: 'instructor'});
}