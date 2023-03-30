import styles from "./Movies.module.css";

const MovieCard = (props) => {
  const { title, date } = props;
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src="https://picsum.photos/300/400"
        alt=""
      />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{date}</p>
    </div>
  );
};

export default MovieCard;
