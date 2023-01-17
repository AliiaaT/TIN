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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [2,60],
                msg: "The field should contain between 2 and 60 characters"
            },
        }
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [2,60],
                msg: "The field should contain between 2 and 60 characters"
            },
        }
    },

    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [9,9],
                msg: "The field should contain 9 characters"
            },
        }
    },

    address: {
        type: Sequelize.STRING,
        allowNull: true
    },

    birthDate: {
        type: Sequelize.DATE,
        get() {
            return !!this.getDataValue('birthDate') ? this.getDataValue('birthDate').toISOString().split('T')[0] : undefined
          },
          validate: {
              notEmpty: {
                  msg: "The field is required."
              }
          },
        allowNull: false
    }

});

module.exports = Student;
