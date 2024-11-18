import React from 'react';
import MovieList from './MovieList';


const App = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1>Netflix-clone App</h1>
      <MovieList />
    </div>
  );
};

export default App;
