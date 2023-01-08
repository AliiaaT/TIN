const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Student = sequelize.define('Student', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING,
        allowNull: true
    },

    birthDate: {
        type: Sequelize.DATE,
        allowNull: false
    }

});

module.exports = Student;
