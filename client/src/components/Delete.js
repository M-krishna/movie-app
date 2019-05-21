import React, { Component } from 'react';
import axios from 'axios';
import './Delete.css';
import Modal from 'react-responsive-modal';

class Delete extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            open: false,
            deleteError: false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/movie')
            .then(result => {
                result.data.sort((a,b) => b['year'] - a['year'])
                this.setState({movies: result.data})
            })
            .catch(err => this.setState({deleteError: true}))

    }

    componentWillUnmount(){
        this.setState({
            movies: []
        })
    }

    deleteMovie = (id, index) => {
        axios.delete(`http://localhost:5000/movie/${id}`)
            .then(result => {
                const movies = Object.assign([], this.state.movies);
                movies.splice(index, 1);
                this.setState({movies: movies});
                this.onOpenModal()
            })
            .catch(err => {
                console.log('Delete Error'+err)
            })

    }

    onOpenModal = () => {
        this.setState({open: true});
    }

    onCloseModal = () => {
        this.setState({open: false});
    }

    render() {
        const {movies} = this.state;
        const {open} = this.state;
        const movieData = movies.map((movie, index) => {
            return (
                <div key={movie._id}>
                    <div className="delete-image">
                        <img src={movie.movieImage} alt={movie.name} />
                    </div>
                    <div className="delete-content">
                        <h3>{movie.name}</h3>
                        <button className="delete-movie" onClick={() => this.deleteMovie(movie._id, index)}>DELETE</button>
                    </div>
                    <hr />
                </div>

            )
        });

        return (
            <div  className="delete-container">
                {movieData}
                <Modal open={open} onClose={this.onCloseModal} center>
                    {this.state.deleteError ? <h1 style={{margin: '10px', padding: '5px'}}>Delete Error</h1> : <h1 style={{margin: '10px', padding: '5px'}}>Deleted Successfully</h1>}
                </Modal>
            </div>
        );
    }
}

export default Delete;