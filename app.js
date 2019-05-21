const express = require('express');
const bodyParser = require('body-parser');
const movieRoute = require('./routes/movies');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.database)
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

const app = express();

const publicDir = require('path').join(__dirname, 'public');
app.use('/public',express.static(publicDir));

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(morgan());

app.use('/movie', movieRoute);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 400;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    });

});

module.exports = app;