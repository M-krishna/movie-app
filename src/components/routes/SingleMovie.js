import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import MovieCard from '../Movie/MovieCard'

import { getMovie } from '../../services/MovieService'

const SingleMovie = props => {

    const [movie, setMovie] = useState({})

    useEffect(() => {
        if(props.location.movieData !== undefined){
            setMovie(props.location.movieData)
        } else {
            const { movieId } = props.match.params
            async function fetchMovie() {
                try {
                    const result = await getMovie(movieId);
                    setMovie(result.data)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchMovie()
        }
    }, [])
    
    return (
        <div className="movie-model">
            <MovieCard movies={movie}/>
            <div className="movie-details">
                <h1 style={{color: "#FFF"}}>{movie.name}</h1>
                <h2 style={{color: "#FFF"}}>{movie.year}</h2>
                <h2 style={{color: "#FFF"}}>
                    {
                        !_.isEmpty(movie.genre) ? movie.genre.join(" / ") : ''
                    }
                </h2>
                <h2 style={{color: "#FFF"}}>{movie.rating}</h2>
            </div>
        </div>
    )
}

export default SingleMovie