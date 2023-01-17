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
            var date = this.getDataValue('startDate').toISOString()
            return date.split('T')[0] + " " + date.split('T')[1].slice(0,5) 
          },
          validate: {
              notEmpty: {
                  msg: "The field is required."
              }
          },
        allowNull: false
    },

    endDate: {
        type: Sequelize.DATE, //change to date+time later
        get() {
            var date = this.getDataValue('endDate').toISOString()
            return date.split('T')[0] + " " + date.split('T')[1].slice(0,5) 
          },
          validate: {
              notEmpty: {
                  msg: "The field is required."
              }
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
                msg: "The field is required."
            }
        },
    },
    insId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The field is required."
            }
        },
    }

});

module.exports = Lesson;
