//const Sequelize = require('sequelize');

const Instructor = require('../../model/sequelize/Instructor');
const Student = require('../../model/sequelize/Student');
const Lesson = require('../../model/sequelize/Lesson');

exports.getInstructors = () => {
    return Instructor.findAll();
};

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

exports.createInstructor = (newInsData) =>{
    return Instructor.create({
        name: newInsData.name,
        email: newInsData.email,
        price: newInsData.price,
        licenseIssueDate: newInsData.licenseIssueDate,
        haCar: newInsData.haCar
    });
};

exports.updateInstructor = (insId, insData) =>{
    const name = insData.name;
    const email = insData.email;
    const price = insData.price;
    const licenseIssueDate = insData.licenseIssueDate;
    const haCar = insData.haCar;
    return Instructor.update(insData, {where: {_id: insId}});
};

exports.deleteInstructor = (insId) => {
    return Instructor.destroy({
        where: {_id: insId}
    });
};