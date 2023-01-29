//const Sequelize = require('sequelize');

const Student = require('../../model/sequelize/Student');
const Instructor = require('../../model/sequelize/Instructor');
const Lesson = require('../../model/sequelize/Lesson');
const Vehicle = require('../../model/sequelize/Vehicle');

exports.getVehicles = () => {
    return Vehicle.findAll();
};

exports.getVehicleById = (vehId) => {
    return Vehicle.findByPk(vehId);
};

exports.createVehicle = (newVehData) =>{
    console.log(newVehData);
    return Vehicle.create({
        modelName: newVehData.modelName,
        transmitionType: newVehData.transmitionType
    });
};

exports.updateVehicle = (vehId, vehData) =>{

    return Vehicle.update(vehData, {where: {_id: vehId}, returning: true,
        plain: true}); 
};

exports.deleteVehicle = (vehId) => {
    return Vehicle.destroy({
        where: {_id: vehId}
    });
};