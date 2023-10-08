import { IMovie } from "../MovieItem/MovieItem";
import MovieItem from "../MovieItem/MovieItem";

interface IProp {
  items: IMovie[];
}

export default function MovieList({ items }: IProp) {
  return (
    <ul>
      {items.map((item) => (
        <MovieItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
