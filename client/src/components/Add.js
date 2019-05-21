import React, { Component } from 'react';
import './Add.css';
import axios from 'axios';
import Modal from 'react-responsive-modal';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            year: '',
            genre: '',
            rating: '',
            director: '',
            movieImage: '',
            open: false,
            uploadError: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFileChange = (e) => {
        this.setState({movieImage: e.target.files[0] })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, year, genre, rating, director, movieImage} = this.state;

        let formData = new FormData();
        formData.append('name', name);
        formData.append('year', year);
        formData.append('genre', genre);
        formData.append('rating', rating);
        formData.append('director', director);
        formData.append('movieImage', movieImage);

        axios.post('http://localhost:5000/movie', formData)
            .then(result => {
                this.setState({
                    uploadError: false,
                    name: '',
                    year: '',
                    genre: '',
                    rating: '',
                    director: '',
                    movieImage: '',
                })
                this.onOpenModal()
            })
            .catch(err => {
                this.setState({uploadError: true})
            })

    }

    onOpenModal = () => {
        this.setState({open: true});
    }

    onCloseModal = () => {
        this.setState({open: false});
    }
    render() {
        const {open} = this.state;
        return (
            <div>
                <form className="form-container">
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder="Name"
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="year"
                        value={this.state.year}
                        onChange={this.onChange}
                        placeholder="Year"
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.onChange}
                        placeholder="Genre"
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.onChange}
                        placeholder="Rating"
                        required
                    />
                    <br />
                    <input
                        type="text"
                        name="director"
                        value={this.state.director}
                        onChange={this.onChange}
                        placeholder="Director"
                        required
                    />
                    <br />
                    <input
                        type="file"
                        onChange={this.onFileChange}
                    />
                    <br />
                    <button type="button" onClick={this.handleSubmit}>
                        Upload
                    </button>
                </form>
                <Modal open={open} onClose={this.onCloseModal} center>
                    {this.state.uploadError ? <h1 style={{margin: '10px', padding: '5px'}}>Upload Error</h1> : <h1 style={{margin: '10px', padding: '5px'}}>Upload Successfull</h1>}
                </Modal>
            </div>
        );
    }
}

export default Add;