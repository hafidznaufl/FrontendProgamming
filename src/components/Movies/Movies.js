import Button from "../ui/Button";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

const Movies = (props) => {
  const { movies, setMovies } = props;

  const AddMovie = () => {
    const movie = {
      id: nanoid,
      title: "Spiral Jigsaw",
      year: "2022",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  };

  return (
    <div>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <Button onClick={AddMovie} variants="secondary">
          Add Movie
        </Button>
      </section>
    </div>
  );
};

export default Movies;