import { useEffect, useState } from "react";
import MovieListSlider from "./MovieListSlider";
import axios from "axios";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  async function getMovieList() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=32313ce28319d492025b3bdf4df346db"
    );
    setMovie(data.results);
  }

  useEffect(() => {
    getMovieList();
  }, []);


  return (
    <>
      <div className="mb-10">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-200">Whats Popular</h2>
          <ul className="flex-col gap-4 md:flex md:flex-row items-center md:gap-8 text-rose-300">
            <li>Streaming</li>
            <li>On TV</li>
            <li>For Rent</li>
            <li>In Theaters</li>
          </ul>
        </div>
        <MovieListSlider movie={movie} />
      </div>
      <div className="mb-4">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-200">Free To Watch</h2>
          <ul className="flex-col gap-4 md:flex md:flex-row items-center md:gap-8 text-rose-300">
            <li>Movies</li>
            <li>TV</li>
          </ul>
        </div>
        <MovieListSlider movie={movie} />
      </div>
    </>
  );
};

export default MovieList;
