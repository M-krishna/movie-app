import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MovieCard from './MovieCard'

const MovieData = props => {
    return (
        <Link 
            to={{
                pathname: `/movie/${props.movieData._id}`,
                movieData: props.movieData
            }}
        >
            <MovieCard movies={props.movieData}/>
        </Link>
    )
}

MovieData.propTypes = {
    movieData: PropTypes.object
}

export default MovieData