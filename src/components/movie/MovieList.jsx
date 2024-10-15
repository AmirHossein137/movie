import { useState } from "react";
import MovieListSlider from "./MovieListSlider";

const MovieList = () => {
  const [MoviesTab, setMoviesTab] = useState("popular");

  const tabsListForMovie = [
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
    { name: "Upcoming", path: "upcoming" },
    { name: "Now Playing", path: "now_playing" },
  ];

  function handleChangeTab(tabName) {
    return setMoviesTab(tabName);
  }
  return (
    <>
      <div className="my-10">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-200">Movies</h2>
          <ul className="flex-col gap-4 md:flex md:flex-row items-center md:gap-8">
            {tabsListForMovie?.map((item, index) => (
              <li
                className={`cursor-pointer ${
                  MoviesTab === item.path
                    ? "text-yellow-500 font-bold"
                    : "text-rose-400"
                }`}
                key={index}
                onClick={() => handleChangeTab(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <MovieListSlider type="movie" activeTab={MoviesTab} />
      </div>
      <div className="mb-4">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-200">Free To Watch</h2>
          <ul className="flex-col gap-4 md:flex md:flex-row items-center md:gap-8 text-rose-300">
            <li>Movies</li>
            <li>TV</li>
          </ul>
        </div>
        <MovieListSlider />
      </div>
    </>
  );
};

export default MovieList;
