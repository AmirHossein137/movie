import { useEffect } from "react";
import MovieList from "../movie/MovieList";
import axios from "axios";
import { apiKey, baseURL } from "../../services/apiConfig";

const HomePage = () => {
  async function getPopularMovies() {
    const res = await axios.get(
      `${baseURL}/movie/popular?api_key=${apiKey}`
    );
    console.log({ res});
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="mt-10 mb-10">
      <MovieList />
    </div>
  );
};

export default HomePage;
