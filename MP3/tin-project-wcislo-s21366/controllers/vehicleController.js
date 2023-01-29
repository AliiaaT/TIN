const VehicleRepository = require('../repository/sequelize/VehicleRepository')


exports.showVehicleList = (req, res, next) => {
    console.log("showVehicleList")
    VehicleRepository.getVehicles()
        .then(vehicles => {
            res.render('vehiclesPage/vehicles', {
                vehicles: vehicles,
                navLocation: 'vehicle'
            });
        })
}

exports.showVehicleDetails = (req, res, next) => {
    const vehId = req.params.vehId;
    console.log("showVehicleDetails")
    VehicleRepository.getVehicleById(vehId)
        .then(vehicle => {
            console.log(vehicle)
            res.render('vehiclesPage/form', {
                vehicle: vehicle,
                formMode: 'showDetails',
                pageTitle: req.__('vehicles-page.details-vehicle-page-title'),
                formAction: '',
                navLocation: 'vehicle',
                validationErrors: []
            });
        });
};

exports.showAddVehicleForm = (req, res, next) => {
    res.render('vehiclesPage/form', {
        vehicle: {},
        pageTitle: req.__('vehicles-page.add-vehicle-page-title'),
        formMode: 'createNew',
        btnLabel: req.__('vehicles-page.buttons.add-new-vehicle'),
        formAction: '/vehicle/add',
        navLocation: 'vehicle',
        validationErrors: []
    });
}


exports.showEditVehicleForm = (req, res, next) => {
    const vehId = req.params.vehId;
    VehicleRepository.getVehicleById(vehId)
        .then(vehicle => {
            console.log(vehicle)
            res.render('vehiclesPage/form', {
                vehicle: vehicle,
                formMode: 'edit',
                pageTitle: req.__('vehicles-page.edit-vehicle-page-title'),
                btnLabel: req.__('vehicles-page.buttons.edit-vehicle'),
                formAction: '/vehicle/edit',
                navLocation: 'vehicle',
                validationErrors: []
            });

        });
};

exports.addVehicle = (req, res, next) => {
    const vehData = {...req.body};
    VehicleRepository.createVehicle(vehData).then( result => {
        res.redirect("/vehicle");
    }).catch(err => {
         res.render('vehiclesPage/form', {
            vehicle: vehData,
            pageTitle: req.__('vehicles-page.add-vehicle-page-title'),
            formMode: 'createNew',
            btnLabel: req.__('vehicles-page.buttons.add-new-vehicle'),
            formAction: '/vehicle/add',
            navLocation: 'vehicle',
            validationErrors: err.errors
        });
    });
};

exports.updateVehicle = (req, res, next) => {
    const vehId = req.body._id;
    const vehData = {...req.body};
    VehicleRepository.updateVehicle(vehId, vehData).then( result => {
        res.redirect("/vehicle");
    }).catch(err => {
         res.render('vehiclesPage/form', {
            vehicle: vehData,
            formMode: 'edit',
            pageTitle: req.__('vehicles-page.edit-vehicle-page-title'),
            btnLabel: req.__('vehicles-page.buttons.edit-vehicle'),
            formAction: '/vehicle/edit',
            navLocation: 'vehicle',
            validationErrors: err.errors
        });
    });
};

exports.deleteVehicle = (req, res, next) => {
    const vehId = req.params.vehId;
    VehicleRepository.deleteVehicle(vehId).then( result => {
        res.redirect("/vehicle");
    });
};

