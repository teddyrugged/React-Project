// import { map } from "fontawesome";
import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const Movies = () => {
    const allMovies = getMovies();
    const [movies, setMovies] = useState([]);
    // const [handleDelete, setHandleDelete] = useState('');
    // handleDelete = movie => { console.log(movie)};
    const handleDelete = (id) => {
      setMovies(movies.filter(deck => deck.id !== id));
   }

  useEffect(() => {
    setMovies(allMovies)


  }, [allMovies]);
  console.log(movies)

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { movies.map(movie => (
            <tr key={movie._id} >
                <td>{ movie.title }</td>
                <td> { movie.genre.name}</td>
                <td> { movie.numberInStock}</td>
                <td> { movie.dailyRentalRate}</td>
                <td><button onClick={() => handleDelete= { handleDelete}} className="btn btn-danger btn-sm">Delete</button></td>
            </tr>

        ))}


      </tbody>
    </table>
  );
};

export default Movies;


// how to get the stock data of Tesla in python?