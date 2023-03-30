import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";
import { movies } from "../../constants/data";
const Movies = () => {
  return (
    <div>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
        {movies.map((movie) => (
          <MovieCard title={movie.title} date={movie.date} />
        ))}
        </div>
      </section>
    </div>
  );
};

export default Movies;
