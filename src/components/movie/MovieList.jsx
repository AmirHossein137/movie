import MovieListSlider from "./MovieListSlider";

const MovieList = () => {
  const movies = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
  ];

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
        <MovieListSlider movies={movies} />
      </div>
      <div className="mb-4">
        <div className="md:flex items-center gap-9 mb-7">
          <h2 className="text-2xl font-bold text-slate-200">Free To Watch</h2>
          <ul className="flex-col gap-4 md:flex md:flex-row items-center md:gap-8 text-rose-300">
            <li>Movies</li>
            <li>TV</li>
          </ul>
        </div>
        <MovieListSlider movies={movies} />
      </div>
    </>
  );
};

export default MovieList;
