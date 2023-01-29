const Sequelize = require('sequelize');

const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const Exam = require('../../model/sequelize/Exam');
const { where } = require('sequelize');
const Vehicle = require('../../model/sequelize/Vehicle');

exports.getExams = () => {
    return Exam.findAll({include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Instructor,
            as: 'instructor'
        }, 
        {
            model: Vehicle,
            as: 'vehicle'
        }]
    });
};

exports.getExamByStuId = (stuId) => {
    return Exam.findAll({include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Instructor,
            as: 'instructor'
        }, 
        {
            model: Vehicle,
            as: 'vehicle'
        }], where: {stuId: stuId}
    });
};

exports.getExamByInsId = (insId) => {
    return Exam.findAll({include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Instructor,
            as: 'instructor'
        }, 
        {
            model: Vehicle,
            as: 'vehicle'
        }], where: {insId: insId}
    });
};

exports.getAllStudentsInstructorsVehicles = () => {
    return new Promise((resolve, reject) => {
        Promise.all([Student.findAll(), Instructor.findAll(), Vehicle.findAll()]).then((result) => {
            console.log(result)
            resolve({
                students: result[0],
                instructors: result[1],
                vehicles: result[2]
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

exports.getExamById = (examId) => {
    return Exam.findByPk(examId, {include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Instructor,
            as: 'instructor'
        }, {
            model: Vehicle,
            as: 'vehicle'
        }]
    });
};



exports.creteExam = (data) =>{
    console.log(JSON.stringify(data));
    console.log(data)
    return Exam.create({
        foreignKey: {name: 'stuId', allowNull: false},
        stuId: data.stuId,
        insId: data.insId,
        vehId: data.vehId,
        status: data.status,
        startDate: data.startDate,
        endDate: data.endDate,
        category: data.category
    });
};

exports.updateExam = (examId, data) =>{
    return Exam.update(data, {where: {_id: examId}});
};

exports.deleteExam = (examId) => {
    return Exam.destroy({
        where: {_id: examId}
    });
};

exports.deleteManyExams = (examId) =>{
    return Exam.find({_id: { [Sequelize.Op.in]: examId }});
}