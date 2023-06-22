import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

const Popular = () => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

  const dispatch = useDispatch()

  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    const movies = response.data.results
    // setMovies(response.data.results);
    dispatch(updateMovie(movies))
  }

  return (
    <div>
      <Hero />
      <Movies title={"Popular Movies"}/>
    </div>
  );
};

export default Popular;
