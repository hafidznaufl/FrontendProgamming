import AddMovieForm from "./AddMovieForm/AddMovieForm";
import Hero from "./Hero/Hero";
import Movies from "./Movies/Movies";
import { data } from "../utils/constants/data"
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies = {movies} setMovie = {setMovies}/>
      <AddMovieForm movies = {movies} setMovie = {setMovies}/>
    </div>
  );
};

export default Main;