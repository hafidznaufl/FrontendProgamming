import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroStyle from "../../components/Hero/Hero.styled";
import Button from "../../components/ui/Button";

const Detail = () => {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

  const [movies, setMovies] = useState("");

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getDetailMovie() {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovies(response.data);
  }

  return (
    <HeroStyle>
      <section>
        <div>
          <h2>{movies.title}</h2>
          <h3>
            {movies && movies.genres.map((genre) => genre.name).join(", ")}
          </h3>
          <p>{movies.overview}</p>
          <Button
            variants="secondary"
            as="a"
            href={
              movies &&
              `https://www.youtube.com/watch?v=${movies.videos.results[0].key}`
            }
            target="_blank"
          >
            Watch Now!
          </Button>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </HeroStyle>
  );
};
export default Detail;
