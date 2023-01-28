const StudentRepository = require('../repository/sequelize/StudentRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    StudentRepository.findByEmail(email)
        .then(stu => {
            if(!stu) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid email address or password"
                })
            } else if(authUtil.comparePasswords(password, stu.password) === true) {
                req.session.loggedUser = stu;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Invalid email address or password"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}