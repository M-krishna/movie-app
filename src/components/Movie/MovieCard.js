import React from 'react'
import PropTypes from 'prop-types'
import '../../App.css'

const MovieCard = props => {
    return (
        <div className="movie-card">
            <img 
                src={props.movies.movieImage} 
                className="movie-image"
                alt="movie-image"
            />
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object
}

export default MovieCard