const Sequelize = require('sequelize');

const Lesson = require('../../model/sequelize/Lesson');
const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const { where } = require('sequelize');

exports.getLessons = () => {
    return Lesson.findAll({include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Instructor,
            as: 'instructor'
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
        }], where: {insId: insId}
    });
};

exports.getAllStudentsAndInstructors = () => {
    return new Promise((resolve, reject) => {
        Promise.all([Student.findAll(), Instructor.findAll()]).then((result) => {
            console.log(result)
            resolve({
                students: result[0],
                instructors: result[1]
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
        }]
    });
};



exports.creteLesson = (data) =>{
    console.log(JSON.stringify(data));
    console.log(data)
    // console.log(Lesson.create({
    //     stuId: data.stuId,
    //     insId: data.insId,
    //     startDate: data.startDate,
    //     endDate: data.endDate,
    //     category: data.category
    // }))
    // var promise = Lesson.create({
    //     stuId: data.stuId,
    //     insId: data.insId,
    //     startDate: data.startDate,
    //     endDate: data.endDate,
    //     category: data.category
    // })
    // promise.then(
    //     console.log("fsdfse")
    // )
    return Lesson.create({
        foreignKey: {name: 'stuId', allowNull: false},
        stuId: data.stuId,
        insId: data.insId,
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