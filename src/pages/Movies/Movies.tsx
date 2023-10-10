import React, { useState } from "react";
import SearchingForm from "../../components/SearchingForm/SearchingForm";
import MovieList from "../../components/MovieList/MovieList";
import { findMovie } from "../../api/api-service";

export default function Movies() {
  const [movies, setMuvies] = useState([]);

  const getMovies = async (movie: string) => {
    const response = await findMovie(movie);

    setMuvies(response.slice(0, 10));
  };

  return (
    <div>
      <h2>Page Movies</h2>
      <SearchingForm getMovieName={getMovies} />
      <MovieList items={movies} />
    </div>
  );
}
