import React from 'react';
import movies from './movies';
import './movielist.css'; // Add styles if needed

const MovieList = () => {
  return (
    <div className="movielist">
      {movies.map((movie) => (
        <div key={movie.id} className="moviecard">
          <img src={movie.image} className='movieimg' alt={movie.title} />
          <h2>{movie.title}</h2>
          <h2>Language: {movie.language}</h2>
          <h2>Cost: {movie.cost}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
