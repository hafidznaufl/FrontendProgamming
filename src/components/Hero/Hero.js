import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyle from "./Hero.styled";

const Hero = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      );
      const data = await response.json();

      setMovie(data);
      console.log(data);
    }

    fetchMovie();
  }, []);

  return (
    <HeroStyle>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variants="secondary">Watch Now!</Button>
        </div>
        <div>
          <img src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </HeroStyle>
  );
};

export default Hero;
