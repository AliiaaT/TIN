const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Exam = sequelize.define('Exam', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    startDate: {
        type: Sequelize.DATE, //change to date+time later
    
        get() {
            var date = this.getDataValue('startDate');
            // console.log(date)
            var a = new Date(date)
            a.setHours(a.getHours() + 1); // Poland time is +1 hour
            date = a.toISOString();

            // console.log(date.split('T')[0] + " " + date.split('T')[1].slice(0,5))
            return date.split('T')[0] + " " + date.split('T')[1].slice(0,5) 
          },
          validate: {
              notEmpty: {
                  msg: "errors.the-field-is-required"
              }
          },
        allowNull: false
    },
    stuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.the-field-is-required"
            }
        },
    },
    insId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.the-field-is-required"
            }
        },
    },
    vehId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "error.the-field-is-required"
            }
        },
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },

});

module.exports = Exam;
