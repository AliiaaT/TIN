const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Instructor = sequelize.define('Instructor', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    licenseIssueDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    hasCar: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }

});

module.exports = Instructor;
