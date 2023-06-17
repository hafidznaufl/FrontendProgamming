import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/constants/data";

const moviesSlice = createSlice({
  name: "Movie Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
  },
});

const moviesReducer = moviesSlice.reducer;
const { addMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie };
