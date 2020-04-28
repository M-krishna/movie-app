import React, { useEffect, useState } from 'react';
import './App.css';

import MovieData from './components/Movie/MovieData';

import { getAllMovies } from './services/MovieService';


const App = props => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        const result = await getAllMovies()
        setMovies(result.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAllMovies()
  }, [])

  return (
    <div className="App">
      {movies.map((movies, index) => {
        return (
          <MovieData movieData={movies} key={index} />
        )
      })}
    </div>
  )
}

export default App;
