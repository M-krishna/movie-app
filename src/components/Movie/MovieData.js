import React from 'react'
import PropTypes from 'prop-types'

import MovieCard from './MovieCard'

const MovieData = props => {
    return (
        <MovieCard movies={props.movieData}/>
    )
}

MovieData.propTypes = {
    movieData: PropTypes.object
}

export default MovieData