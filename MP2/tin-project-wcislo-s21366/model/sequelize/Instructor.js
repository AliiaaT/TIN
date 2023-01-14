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

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "The field is required."
            },
            len: {
                args: [5,60],
                msg: "The field should contain between 2 and 60 characters"
            },
            isEmail: {
                msg: "The field should contain a valid email address"
            }
        }
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            }
        },
    },

    licenseIssueDate: {
        type: Sequelize.DATE,
        get() {
            return this.getDataValue('licenseIssueDate').toISOString().split('T')[0]
          },
          validate: {
              notEmpty: {
                  msg: "The field is required."
              }
          },
        allowNull: false
    },

    hasCar: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }

});

module.exports = Instructor;
