import React, { useEffect, useState } from "react";
import { getTrendingMovie } from "../../api/api-service";
import Container from '../../components/Container/Container'
import MovieList from "../../components/MovieList/MovieList";

interface IMovie {
  id: number;
  title: string;
  popularity: number;
  release_date: string;
  poster_path: string;
}

export default function Home() {
  const [trendMovies, setTrendMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await getTrendingMovie();
     setTrendMovies(response)
    };
    getMovies();
  }, []);

   return (
    <Container>
    <section>
      <h2>Trending movies</h2>
      <MovieList items={trendMovies} />
    </section>
      </Container>
  );
}
