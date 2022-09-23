// import { map } from "fontawesome";
import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";

const Movies = () => {
  const allMovies = getMovies();
  const [movies, setMovies] = useState([]);

  //  const deleteItem = (e) => {
  //   const newTodos = todos.filter((item) => item.index !== 1 /*This works properly with a hardcoded value(1) but how can this be done dynamically as e doesn't seem to have anything useful within it (like e.target.value)*/);
  //   setTodos(newTodos);
  // };

  useEffect(() => {
    setMovies(allMovies);
  }, [allMovies]);
  console.log(movies);

  const handleDelete = (id) => {
    const deleted = movies.filter((movie) => movie._id !== id);
    setMovies(deleted);
  };

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
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td> {movie.genre.name}</td>
            <td> {movie.numberInStock}</td>
            <td> {movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => {
                  handleDelete(movie._id);
                }}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Movies;

// how to write delete functtion in react?
