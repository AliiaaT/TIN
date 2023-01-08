const StudentRepository = require('../repository/sequelize/StudentRepository');

exports.getStudents = (req, res, next) => {
    StudentRepository.getStudents()
        .then(studs => {
            res.status(200).json(studs);
        })
        .catch(err =>{
            console.log(err);
        });
};


exports.getStudentById = (req, res, next) => {
    const stuId = req.params.stuId;
    StudentRepository.getStudentById(stuId)
        .then(stu => {
            if(!stu){
                res.status(404).json({
                    message: 'Student with id: '+stuId+' not found'
                })
            }else{
                res.status(200).json(stu);
            }
        });
};

exports.createStudent = (req, res, next) => {
    StudentRepository.createStudent(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
        });
};

exports.updateStudent = (req, res, next) => {
    const stuId = req.params.stuId;
    StudentRepository.updateStudent(stuId, req.body)
        .then(result => {
            res.status(200).json({message: 'Student updated!', stu: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteStudent = (req, res, next) => {
    const stuId = req.params.stuId;
    StudentRepository.deleteStudent(stuId)
        .then(result => {
            res.status(200).json({message: 'Removed student!', stu: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next.err;
        });
};


