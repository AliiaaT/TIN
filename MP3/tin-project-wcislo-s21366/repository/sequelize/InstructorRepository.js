//const Sequelize = require('sequelize');

const Instructor = require('../../model/sequelize/Instructor');
const Student = require('../../model/sequelize/Student');
const Lesson = require('../../model/sequelize/Lesson');

exports.getInstructors = () => {
    return Instructor.findAll();
};

exports.findByEmail = (email) => {
    return Instructor.findOne({
        where: {email: email}
    });
}

exports.getInstructorById = (insId) => {
    return Instructor.findByPk(insId,
        {
            include: [{
                model: Lesson,
                as: 'lessons',
                include: [{
                    model: Student,
                    as: 'student'
                }]
            }]
    });
};

const authUtil = require('../../util/authUtils');
exports.createInstructor = (newInsData) =>{
    return Instructor.create({
        name: newInsData.name,
        email: newInsData.email,
        password: authUtil.hashPassword(newInsData.password),
        price: newInsData.price,
        licenseIssueDate: newInsData.licenseIssueDate,
        hasCar: newInsData.hasCar
    });
};

exports.updateInstructor = (insId, insData) =>{
    const name = insData.name;
    const email = insData.email;
    const price = insData.price;
    const licenseIssueDate = insData.licenseIssueDate;
    const hasCar = insData.hasCar;

    insData.password = authUtil.hashPassword(insData.password);
    return Instructor.update(insData, {where: {_id: insId}});
};

exports.deleteInstructor = (insId) => {
    return Instructor.destroy({
        where: {_id: insId}
    });
};