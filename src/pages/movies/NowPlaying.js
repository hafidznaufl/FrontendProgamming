import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovie } from "../../features/movieSlice";

const NowPlaying = () => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;

  // const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPLayingMovies();
  }, []);

  async function getNowPLayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);
    const movies = response.data.results;
    // setMovies(response.data.results);
    dispatch(updateMovie(movies));
  }

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movies" />
    </div>
  );
};

export default NowPlaying;
