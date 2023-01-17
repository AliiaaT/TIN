//const Sequelize = require('sequelize');

const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const Lesson = require('../../model/sequelize/Lesson');

exports.getStudents = () => {
    return Student.findAll();
};

exports.getStudentById = (stuId) => {
    return Student.findByPk(stuId,
        {
            include: [{
                model: Lesson,
                as: 'lessons',
                include: [{
                    model: Instructor,
                    as: 'instructor'
                }]
            }]
    });
};

exports.createStudent = (newStuData) =>{
    return Student.create({
        firstName: newStuData.firstName,
        lastName: newStuData.lastName,
        phoneNumber: newStuData.phoneNumber,
        address: newStuData.address,
        birthDate: newStuData.birthDate
    });
};

exports.updateStudent = (stuId, stuData) =>{
    const firstName = stuData.name;
    const lastName = stuData.surname;
    const phoneNumber = stuData.phoneNumber;
    const address = stuData.address;
    const birthDate = stuData.birthDate;
    return Student.update(stuData, {where: {_id: stuId}, returning: true,
        plain: true}); 
};

exports.deleteStudent = (stuId) => {
    return Student.destroy({
        where: {_id: stuId}
    });
};