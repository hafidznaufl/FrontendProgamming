import styles from "./Hero.module.css"

const Hero = () => {
    return ( 
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Drama, Thriller, Romance</h3>
                    <p className={styles.hero__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, cumque?</p>
                    <button className={styles.hero__button}>Watch Now!</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/536/354" alt="placeholder" />
                </div>
            </section>
        </div>
     );
}
 
export default Hero;