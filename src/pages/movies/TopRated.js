import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

const TopRated = () => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`;

  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowTopRatedMovies();
  }, []);

  async function getNowTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);
    // setMovies(response.data.results);
    const movies = response.data.results;
    dispatch(updateMovie(movies));
  }

  return (
    <div>
      <Hero />
      <Movies title="Top Rated Movies" />
    </div>
  );
};

export default TopRated;
