const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    const passHashed = bcrypt.hashSync(passPlain, salt);
    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain, passHash);
    return res;
}

exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if(loggedUser) {
        next();
    } else {
        throw new Error('unauthorized access');
    }
}
exports.permitAuthenticatedAdminUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    const loggedUserType = req.session.loggedUserType;
    if(loggedUser && loggedUserType == "administrator") {
        next();
    } else {
        throw new Error('unauthorized access, only administrators have access');
    }
}
exports.permitAuthenticatedAdminAndInstructorUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    const loggedUserType = req.session.loggedUserType;
    if(loggedUser && (loggedUserType == "administrator" || loggedUserType == "instructor")) {
        next();
    } else {
        throw new Error('unauthorized access, only administrators have access');
    }
}