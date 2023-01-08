const Sequelize = require('sequelize');

const sequelize = new Sequelize('driving-school', 'root', 'root', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
