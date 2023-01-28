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
                msg: "errors.the-field-is-required"
            },
            len: {
                args: [2,60],
                msg: "errors.2-60-symbols"
            },
        }
    },

    lastName: {
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

    phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "errors.the-field-is-required"
            },
            len: {
                args: [9,9],
                msg: "errors.9-symbols"
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
                  msg: "errors.the-field-is-required"
              },
              customValidator(value) {
                if (new Date(value) > new Date()) {
                  throw new Error("errors.birthdate-bigger-current");
                }
              },
          },
        allowNull: false
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
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "errors.the-field-is-required"
            },
            len: {
                args: [2,60],
                msg: "errors.2-60-symbols"
            }
        }
    }
});

module.exports = Student;
