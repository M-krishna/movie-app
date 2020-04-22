const express = require('express');
const router = express.Router();
const multer = require('multer');
const MovieModel = require('../models/movies');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }
    else{
        cb(null ,false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 7
    },
    fileFilter: fileFilter
});

router.get('/', (req, res) => {
    MovieModel.find()
        .select('_id name year genre rating movieImage')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Database Error ' + err
            })
        })

});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findById({_id: id})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Database Error' + err
            })
        })
});

router.post('/', upload.single('movieImage'), (req, res) => {
    const newPath = req.file.path.replace(/[\\]/g, '/');
    console.log(newPath)
    const newMovie = new MovieModel({
        name: req.body.name,
        year: req.body.year,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director,
        movieImage: newPath
    });

    newMovie.save()
        .then(result => {
            res.status(200).json({
                message: 'Movie Uploaded Successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Server Error ' + err
            })
        })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findOne({_id: id}, (err, foundObject) => {
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else{
            if(!foundObject){
                res.status(404).send();
            }
            else{
                if(req.body.name){
                    foundObject.name = req.body.name
                }
                if(req.body.year){
                    foundObject.year = req.body.year
                }
                if(req.body.genre){
                    foundObject.genre = req.body.genre
                }
                if(req.body.rating){
                    foundObject.rating = req.body.rating
                }
                if(req.body.director){
                    foundObject.director = req.body.director
                }

                foundObject.save()
                    .then(result => {
                        console.log(result)
                        res.status(200).json({
                            message: 'Updated Successfully'
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: 'Update Error'
                        })
                    })
            }
        }
    })
});

router.delete('/:id' ,(req, res) => {
    const id = req.params.id;
    MovieModel.remove({_id: id})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({
                message: 'Delete Error' + error
            })
        })
});

router.delete('/', (req, res) => {
    MovieModel.remove({})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Delete Error' + err
            })
        })
})

module.exports = router;