import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            moviename: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch = () => {
        console.log(this.state.moviename)
    }

    render() {
        return (
            <div className="nav">
                <div>
                <span className="title">Movie Info</span>
                    <ul className="content">
                        <Link to="/" className="nav-link">Home</Link>
                    </ul>
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input
                        type="text"
                        name="moviename"
                        value={this.state.moviename}
                        onChange={this.onChange}
                        onKeyUp={this.handleSearch}
                        className="search-movie"
                        placeholder="Search Movie"
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;