import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";

const AddMovieForm = (props) => {
  const { movies, setMovie } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [poster, setPoster] = useState("");

  // const [isTitleError, setIsTitleError] = useState(false);
  // const [isDateError, setIsDateError] = useState(false);
  // const [isTypeError, setIsTypeError] = useState(false);
  // const [isPosterError, setIsPosterError] = useState(false);

  const [error, setError] = useState({
    title: false,
    date: false,
    type: false,
    poster: false
  })

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handlePoster = (e) => setPoster(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setError({...error, title: true, date: false, type: false, poster: false})
    } else if (date === "") {
      setError({...error, title: false, date: true, type: false, poster: false})
    } else if (type === "") {
      setError({...error, title: false, date: false, type: true, poster: false})
    } else if (poster === "") {
      setError({...error, title: false, date: false, type: false, poster: true})
    } else {
      const movie = {
        id: nanoid(4),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovie([...movies, movie]);
      setError({...error, title: false, date: false, type: false, poster: false})
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h1>Add Movie</h1>
          <form
            action=""
            className={styles.form__content}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={handleTitle} />
            {error.title && <p>Title tidak boleh kosong</p>}
            <label htmlFor="">Date</label>
            <input type="text" value={date} onChange={handleDate} />
            {error.date && <p>Date tidak boleh kosong</p>}
            <label htmlFor="">Choose a Type:</label>
            <select value={type} onChange={handleType}>
              <option value=""></option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            {error.type && <p>Type tidak boleh kosong</p>}
            <label htmlFor="">Poster</label>
            <input type="text" value={poster} onChange={handlePoster} />
            {error.poster && <p>Poster tidak boleh kosong</p>}

            <button>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
