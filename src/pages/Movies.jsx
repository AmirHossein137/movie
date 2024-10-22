import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { apiClient } from "../services/apiConfig";
import { ImgURL } from "../helpers/ImgUrl";
import { Link } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner"
const Movies = () => {
  const tabsListForMovie = [
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
    { name: "Upcoming", path: "upcoming" },
    { name: "Now Playing", path: "now_playing" },
  ];

  const [chooseCategory, setChooseCategory] = useState("popular");
  const [movieData, setMovieData] = useState([]);
  const { loading, setLoading } = useUserContext();

  console.log(movieData);

  const getMovies = async () => {
    setLoading(true);
    await apiClient.get(`/movie/${chooseCategory}`).then((res) => {
      if (res.status === 200) {
        setMovieData(res.data.results);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getMovies();
  }, [chooseCategory]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center font-semibold text-3xl">Movie Lists</h1>
      <div className="flex items-center gap-5 flex-wrap justify-center">
        {tabsListForMovie?.map((movie, index) => (
          <button
            className={`${
              chooseCategory === movie.path
                ? "bg-yellow-600 border-yellow-400 hover:shadow-yellow-800"
                : "border-gray-800 hover:bg-slate-800 hover:shadow-yellow-700"
            } py-3 px-6 border rounded-lg transition-all duration-200 hover:shadow-md`}
            key={index}
            onClick={() => setChooseCategory(movie.path)}
          >
            {movie.name}
          </button>
        ))}
      </div>
      <div>
        {loading ? (
            <LoaderSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {movieData?.map((item) => (
              <Link
                key={item.id}
                to={`/movies/${item?.id}`}
                className="flex flex-col gap-4 shadow-md shadow-slate-800 p-4 rounded-xl transition-all duration-150 hover:shadow-lg hover:shadow-slate-700"
              >
                <img src={ImgURL("w780", item?.poster_path)} className="rounded-xl"/>
                <span className="text-lg text-center font-semibold">
                  {item?.name || item?.title}
                </span>
                <p className="line-clamp-3 text-justify text-sm text-gray-300">
                  {item?.overview}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span>Vote :</span>
                    <span>{`${item?.vote_average} / 10`}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
