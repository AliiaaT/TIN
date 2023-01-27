const InstructorRepository = require('../repository/sequelize/InstructorRepository')


exports.showInstructorList = (req, res, next) => {
    InstructorRepository.getInstructors()
        .then(insts => {
            res.render('intructorPage/instructor', {
                insts: insts,
                navLocation: 'instructor'
            });
        })
}


exports.showInstructorDetails = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.getInstructorById(insId)
        .then(inst => {
            res.render('intructorPage/form', {
                inst: inst,
                formMode: 'showDetails',
                pageTitle: req.__('instructors-page.details-instructors-page-title'),
                formAction: '',
                navLocation: 'instructor',
                validationErrors: []
            });
        });
}

exports.showAddInstructorForm = (req, res, next) => {
    res.render('intructorPage/form', {
        inst: {},
        pageTitle: req.__('instructors-page.add-instructors-page-title'),
        btnLabel: req.__('instructors-page.buttons.add-new-instructor'),
        formMode: 'createNew',
        formAction: '/instructor/add',
        navLocation: 'instructor',
        validationErrors: []
    });
}

exports.showEditInstructorForm = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.getInstructorById(insId)
        .then(inst => {
            console.log(inst)
            res.render('intructorPage/form', {
                inst: inst,
                formMode: 'edit',
                pageTitle: req.__('instructors-page.edit-instructor-page-title'),
                btnLabel: req.__('instructors-page.buttons.edit-instructor'),
                formAction: '/instructor/edit',
                navLocation: 'instructor',
                validationErrors: []
            });

        });
}

exports.addInstructor = (req, res, next) => {
    const insData = {...req.body};
    if (insData.hasCar === "on") {
        insData.hasCar = true;
    } else {
        insData.hasCar = false;
    }
    console.log(insData);
    InstructorRepository.createInstructor(insData).then( result => {
        res.redirect("/instructor");
    }).catch(err => {
        err.errors.forEach(e => {
            if(e.path.includes('email') && e.type == 'unique violation') {
                e.message = req.__('errors.email-already-in-use');
            }
         });
        res.render('intructorPage/form', {
            inst: insData,
            pageTitle: req.__('instructors-page.add-instructors-page-title'),
            btnLabel: req.__('instructors-page.buttons.add-new-instructor'),
            formMode: 'createNew',
            formAction: '/instructor/add',
            navLocation: 'instructor',
            validationErrors: err.errors
        });
    });
};

exports.updateInstructor = (req, res, next) => {
    const insId = req.body._id;
    const insData = {...req.body};
    if (insData.hasCar === "on") {
        insData.hasCar = true;
    } else {
        insData.hasCar = false;
    }
    InstructorRepository.updateInstructor(insId, insData).then( result => {
        res.redirect("/instructor");
    }).catch(err => {
        err.errors.forEach(e => {
            if(e.path.includes('email') && e.type == 'unique violation') {
                e.message = req.__('errors.email-already-in-use');
            }
         });
         res.render('intructorPage/form', {
            inst: insData,
            formMode: 'edit',
            pageTitle: req.__('instructors-page.edit-instructor-page-title'),
            btnLabel: req.__('instructors-page.buttons.edit-instructor'),
            formAction: '/instructor/edit',
            navLocation: 'instructor',
            validationErrors: err.errors
        });
    });
};

exports.deleteInstructor = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.deleteInstructor(insId).then( result => {
        res.redirect("/instructor");
    });
};

