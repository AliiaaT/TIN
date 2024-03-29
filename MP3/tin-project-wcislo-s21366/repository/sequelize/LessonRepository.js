const Sequelize = require('sequelize');

const Lesson = require('../../model/sequelize/Lesson');
const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const { where } = require('sequelize');
const Vehicle = require('../../model/sequelize/Vehicle');

exports.getLessons = () => {
    return Lesson.findAll({include: [
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

exports.getLessonByStuId = (stuId) => {
    return Lesson.findAll({include: [
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
        }], where: {stuId: stuId}
    });
};

exports.getLessonByInsId = (insId) => {
    return Lesson.findAll({include: [
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

exports.getLessonById = (lessonId) => {
    return Lesson.findByPk(lessonId, {include: [
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



exports.creteLesson = (data) =>{
    console.log(JSON.stringify(data));
    console.log(data)
    return Lesson.create({
        foreignKey: {name: 'stuId', allowNull: false},
        stuId: data.stuId,
        insId: data.insId,
        vehId: data.vehId,
        startDate: data.startDate,
        endDate: data.endDate,
        category: data.category
    });
};

exports.updateLesson = (lessonId, data) =>{

    return Lesson.update(data, {where: {_id: lessonId}});
};

exports.deleteLesson = (lessonId) => {
    return Lesson.destroy({
        where: {_id: lessonId}
    });
};

exports.deleteManyLessons = (lessonId) =>{
    return Lesson.find({_id: { [Sequelize.Op.in]: lessonId }});
}