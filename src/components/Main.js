import AddMovieForm from "./AddMovieForm/AddMovieForm";
import Hero from "./Hero/Hero";
import Movies from "./Movies/Movies";
import { data } from "../utils/constants/data"
import { useState } from "react";

const Main = () => {
  const [movies, setmovie] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies = {movies} setMovie = {setmovie}/>
      <AddMovieForm movies = {movies} setMovie = {setmovie}/>
    </div>
  );
};

export default Main;
