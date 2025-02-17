import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  const movieTrailer = useSelector(
    (store) => store.movies.trailerVideo
  );

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!movieTrailer) {
     getMovieVideo();
    }
  }, []);
}

export default useMovieTrailer;
