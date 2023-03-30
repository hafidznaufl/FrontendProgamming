import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
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
          <form action="" className={styles.form__content}>
            <label htmlFor="">Title</label>
            <input type="text" />
            <label htmlFor="">Date</label>
            <input type="text" />
            <button>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
