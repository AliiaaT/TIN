const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Lesson = sequelize.define('Lesson', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    startDate: {
        type: Sequelize.DATE, //change to date+time later
        allowNull: false
    },

    endDate: {
        type: Sequelize.DATE, //change to date+time later
        allowNull: false
    },

    category: {
        type: Sequelize.STRING,
        allowNull: true
    },
    stuId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    insId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = Lesson;
