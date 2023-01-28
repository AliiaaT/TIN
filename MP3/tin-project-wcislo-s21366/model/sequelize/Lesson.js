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
              },
              customValidator(value) {
                if (new Date(value) < new Date()) {
                  throw new Error("errors.date-should-be-in-future");
                }
            }
          },
        allowNull: false
    },

    endDate: {
        type: Sequelize.DATE, //change to date+time later
        get() {
            var date = this.getDataValue('endDate');
            var a = new Date(date)
            a.setHours(a.getHours() + 1); // Poland time is +1 hour
            date = a.toISOString();
            return date.split('T')[0] + " " + date.split('T')[1].slice(0,5) 
          },
          validate: {
              notEmpty: {
                  msg: "errors.the-field-is-required"
              },
              // server validation for endDate
              customValidator(value) {
                var startDate = this.getDataValue('startDate');
                if (new Date(value) < startDate) {
                  throw new Error("errors.end-date-after-start-date");
                }
              },
          },
        allowNull: false
    },

    category: {
        type: Sequelize.STRING,
        allowNull: true
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
    }

});

module.exports = Lesson;
