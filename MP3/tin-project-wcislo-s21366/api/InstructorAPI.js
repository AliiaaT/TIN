const InstructorRepository = require('../repository/sequelize/InstructorRepository');

exports.getInstructors = (req, res, next) => {
    console.log("Called getIntructors")
    InstructorRepository.getInstructors()
        .then(insts => {
            res.status(200).json(insts);
        })
        .catch(err =>{
            console.log(err);
        });
};


exports.getInstructorById = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.getInstructorById(insId)
        .then(inst => {
            if(!inst){
                res.status(404).json({
                    message: 'instructor with id: '+insId+' not found'
                })
            }else{
                res.status(200).json(inst);
            }
        });
};

exports.createInstructor = (req, res, next) => {
    InstructorRepository.createInstructor(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
        });
};

exports.updateInstructor = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.updateInstructor(insId, req.body)
        .then(result => {
            res.status(200).json({message: 'Instructor updated!', inst: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteInstructor = (req, res, next) => {
    const insId = req.params.insId;
    InstructorRepository.deleteInstructor(insId)
        .then(result => {
            res.status(200).json({message: 'Removed instructor!', inst: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next.err;
        });
};


