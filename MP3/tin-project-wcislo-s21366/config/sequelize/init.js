const sequelize = require('./sequelize');

const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const Lesson = require('../../model/sequelize/Lesson');
const Administrator = require('../../model/sequelize/Administrator');

const authUtil = require('../../util/authUtils');
const passHash = authUtil.hashPassword('12345');

module.exports = () => {
    Student.hasMany(Lesson, {as: 'lessons', foreignKey: {name: 'stuId', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Lesson.belongsTo(Student, {as: 'student', foreignKey: {name: 'stuId', allowNull: false} });
    Instructor.hasMany(Lesson, {as: 'lessons', foreignKey: {name: 'insId', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Lesson.belongsTo(Instructor, {as: 'instructor', foreignKey: {name: 'insId', allowNull: false} });

    // let allStuds, allInsts;
    return sequelize
        .sync({force: true}) // force: true deletes database
        .then( () => {
            return Student.findAll();
        })
        .then(studs => {
            if(!studs || studs.length==0){
                return Student.bulkCreate([
                    {firstName: 'Aliia', lastName: 'Temirbek kyzy', email: "first@gmail.com", phoneNumber: 111111111, address: null, birthDate: '2001-01-01', password: passHash},
                    {firstName: 'Jenny', lastName: 'Kim', email: "second@gmail.com", phoneNumber: 222222222, address: 'Korea', birthDate: '2002-01-01', password: passHash},
                    {firstName: 'Liam', lastName: 'Max', email: "third@gmail.com", phoneNumber: 333333333, address: 'Poland', birthDate: '2003-01-01', password: passHash}
                ])
                .then( () => {
                    return Student.findAll();
                });
            }else{
                return studs;
            }
        })
        .then( studs => {
            allStuds = studs;
            return Instructor.findAll();
        })
        .then( insts => {
            if(!insts || insts.length==0){
                return Instructor.bulkCreate([
                    {name: 'Mitchal', email: 'mitchal1213@gmail.com', price: 200, licenseIssueDate: '2002-01-01', hasCar: 'false', password: passHash},
                    {name: 'Anna', email: 'anna00@gmail.com', price: 150, licenseIssueDate: '2008-01-01', hasCar: 'true', password: passHash},
                ])
                .then( () => {
                    return Student.findAll();
                });
            }else{
                return insts;
            }
        })
        .then(insts => {
            allInsts=insts;
            return Lesson.findAll();
        })
        .then(lessns => {
            if(!lessns || lessns.length==0) {
                return Lesson.bulkCreate([
                    {stuId: allStuds[0]._id, insId: allInsts[0]._id, startDate: '3000-01-01', endDate: '2002-01-02', category: null}, // change to datetime later
                    {stuId: allStuds[1]._id, insId: allInsts[1]._id, startDate: '2022-01-01', endDate: '2002-01-12', category: 'A'},
                    {stuId: allStuds[2]._id, insId: allInsts[1]._id, startDate: '2033-01-01', endDate: '2002-01-12', category: 'B'}
                ]);
            }else{
                return lessns;
            }
        }).then(lessns => {
            return Administrator.bulkCreate([
                {firstName: 'Admin', lastName: 'Admin', email: "admin@gmail.com", password: passHash},
            ])
        });
};

