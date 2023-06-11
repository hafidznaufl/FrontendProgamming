import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroStyle from "../../components/Hero/Hero.styled";
import Button from "../../components/ui/Button";
import ENDPOINTS from "../../utils/constants/endpoints";
import Movies from "../../components/Movies/Movies";

const Detail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState("");
  const [recom, setRecom] = useState([]);

  useEffect(() => {
    getDetailMovie();
    getRecomMovie();
  }, [getDetailMovie, getRecomMovie]);

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovies(response.data);
  }

  async function getRecomMovie() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));

    setRecom(response.data.results);
  }

  return (
    <>
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
      <Movies movies={recom} title="Recommendations Movie" />
    </>
  );
};
export default Detail;
