//const Sequelize = require('sequelize');

const Administrator = require('../../model/sequelize/Administrator');

exports.getAdministrators = () => {
    return Administrator.findAll();
};

exports.findByEmail = (email) => {
    return Administrator.findOne({
        where: {email: email}
    });
}