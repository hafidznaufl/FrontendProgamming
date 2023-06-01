import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Popular = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);

    console.log(response.data.results);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
};

export default Popular;
