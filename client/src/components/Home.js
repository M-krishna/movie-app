import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import '../App.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            sortedMovies: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/movie')
            .then(result => {
                result.data.sort((a,b) => b['year'] - a['year'])
                this.setState({movies: result.data})
            })
            .catch(err => console.log(err))

    }

    render() {
        const {movies} = this.state;
        const movieData = movies.map((movie) => {
            return (
                <Link to={`/movie/${movie._id}`} key={movie._id} className="card-link">
                    <li className="card-list">
                    <div className="card">
                        <img src={movie.movieImage} alt={movie.name} />
                    </div>
                    </li>
                </Link>
            )
        });

        return(
            <div className="disp-movie" ref="isScroll">
                <Helmet>
                    <title>Movie Info</title>
                </Helmet>
                {movieData}
            </div>
        )
    }
}

export default Home;