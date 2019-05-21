import React, { Component } from 'react';
import axios from 'axios';
import './Singlemovie.css';
import {Helmet} from 'react-helmet';

class SingleMovie extends Component {

    constructor(props){
        super(props);
        this.state = {
            singleMovie: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get(`http://localhost:5000/movie/${id}`)
            .then(result => {
                this.setState({singleMovie: result.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        const {movieImage, name, rating, year, genre, director} = this.state.singleMovie
        return (
            <div className="moviecard">
                <Helmet>
                    <title>{`${name+'--'+year}`}</title>
                </Helmet>
                <div className="imageContainer">
                    <img src={movieImage} alt={name} className="image"/>
                </div>
                <div className="contentContainer">
                    <div className="name-year">
                        <h1 className="movie-name">{name}</h1>
                        <h2 className="movie-year">{year}</h2>
                        <h2 className="movie-genre">{genre}</h2>
                        <h2 className="movie-rating">Rating : {rating}</h2>
                    </div>
                    <h1 className="director">Director: {director}</h1>
                </div>

            </div>
        );
    }
}

export default SingleMovie;