import { map } from "fontawesome";
import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const Movies = () => {
    const allMovies = getMovies();
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(allMovies)


  }, []);
  console.log(movies)

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
        { movies.map(movie => (
            <tr key={movie._id} >
                <td>{ movie.title }</td>
                <td> { movie.genre.name}</td>
                <td> { movie.numberInStock}</td>
                <td> { movie.dailyRentalRate}</td>
            </tr>

        ))}


      </tbody>
    </table>
  );
};

export default Movies;
