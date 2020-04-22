const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MovieSchema = new schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    movieImage: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Movie', MovieSchema);