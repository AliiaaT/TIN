const LessonRepository = require('../repository/sequelize//LessonRepository');

exports.getLessons = (req, res, next) => {
    //console.log("Called getIntructors")
    LessonRepository.getLessons()
        .then(lessns => {
            res.status(200).json(lessns);
        })
        .catch(err =>{
            console.log(err);
        });
};


exports.getLessonById = (req, res, next) => {
    console.log(req.params)
    const lessId = req.params.lessonId;
    LessonRepository.getLessonById(lessId)
        .then(less => {
            if(!less){
                res.status(404).json({
                    message: 'lesson with id: '+lessId+' not found'
                })
            }else{
                res.status(200).json(less);
            }
        });
};

exports.createLesson = (req, res, next) => {
    console.log("createLesson called")
    LessonRepository.creteLesson(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
        });
};

exports.updateLesson = (req, res, next) => {
    const lessId = req.params.lessonId;
    LessonRepository.updateLesson(lessId, req.body)
        .then(result => {
            res.status(200).json({message: 'Lesson updated!', lessn: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteLesson = (req, res, next) => {
    const lessId = req.params.lessonId;
    LessonRepository.deleteLesson(lessId)
        .then(result => {
            res.status(200).json({message: 'Removed lesson!', lessn: result});
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next.err;
        });
};


