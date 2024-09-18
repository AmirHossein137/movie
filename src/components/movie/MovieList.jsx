import MovieListSlider from "./MovieListSlider";

const MovieList = () => {
  const movies = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
  ];

  return (
    <div className="">
      <MovieListSlider movies={movies}/>
    </div>
  );
};

export default MovieList;
