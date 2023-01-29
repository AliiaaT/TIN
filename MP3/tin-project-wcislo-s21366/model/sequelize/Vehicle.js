const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Vehicle = sequelize.define('Vehicle', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    modelName: {
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

    transmitionType: {
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
    }
});

module.exports = Vehicle;
