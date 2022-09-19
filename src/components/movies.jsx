import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const Movies = () => {
  let allMovies = "";
  const [movies, setMovies] = useState();

  useEffect(() => {
    allMovies = getMovies();
  }, []);

  useEffect(() => {
    setMovies(allMovies);
    console.log(movies);
    console.log(allMovies);
  }, []);

  // state = {
  //     movies:getMovies()
  // };
  // const [movie, setMovie] = useState({title: movie.title, genre: movie.genre,
  //      numberInStock: movie.numberInStock,
  //      dailyRentalRate: movie.dailyRentalRate})
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {allMovies.map((movie) => (
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Movies;
