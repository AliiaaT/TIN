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
            return !!this.getDataValue('licenseIssueDate') ? this.getDataValue('licenseIssueDate').toISOString().split('T')[0] : undefined
          },
          validate: {
              notEmpty: {
                  msg: "The field is required."
              },
              customValidator(value) {
                if (new Date(value) > new Date()) {
                  throw new Error("License Issue Date should be less than current date.(server)");
                }
              },
          },
        allowNull: false
    },

    hasCar: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }

});

module.exports = Instructor;
