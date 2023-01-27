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
                msg: "errors.the-field-is-required"
            },
            len: {
                args: [2,60],
                msg: "errors.2-60-symbols"
            },
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "errors.the-field-is-required"
            },
            isEmail: {
                msg: "errors.valid-email"
            }
        }
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "errors.the-field-is-required"
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
                  msg: "errors.the-field-is-required"
              },
              customValidator(value) {
                if (new Date(value) > new Date()) {
                  throw new Error("errors.license-date-less-current-date");
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
