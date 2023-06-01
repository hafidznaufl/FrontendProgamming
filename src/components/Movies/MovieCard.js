import styles from "./Movies.module.css";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={
          movie.poster ||
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        alt="placeholder"
      />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <p className={styles.movie__date}>{movie.year || movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
