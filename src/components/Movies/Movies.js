import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";

const Movies = (props) => {
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Movies;
