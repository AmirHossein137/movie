import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { apiClient } from "../services/apiConfig";
import { ImgURL } from "../helpers/ImgUrl";
import { Heart } from "lucide-react";
import ReactStars from "react-rating-stars-component";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user, session, favoriteMovies, FetchFavoriteMovies } =
    useUserContext();

  const getMovieDetail = async () => {
    const res = await apiClient.get(`/movie/${id}`);
    setMovie(res.data);
  };

  useEffect(() => {
    if ((movie, favoriteMovies.length)) {
      const favorite = favoriteMovies.find((elem) => elem.id === movie?.id);
      setIsFavorite(Boolean(favorite));
    }
  }, [movie, favoriteMovies]);

  const addeddToFavritelist = async () => {
    if (session) {
      await apiClient.post(`account/${user.id}/favorite`, {
        media_type: "movie",
        media_id: movie.id,
        favorite: !isFavorite,
      });

      FetchFavoriteMovies();
      toast.success(
        `${movie.title} ${
          isFavorite ? "Removed" : "Added"
        } Add To Favorite List`
      );
    } else {
      toast.error("Please First Login...");
    }
  };

  const handleRating = async (newRating) => {
    await apiClient.post(`/movie/${movie.id}/rating`, { value: newRating });
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  return (
    <div className="grid grid-cols-12 gap-5 mt-11">
      <div className="col-span-4">
        <img
          className="w-full rounded-lg"
          src={ImgURL("w780", movie?.poster_path)}
        />
      </div>
      <div className="col-span-8">
        <h1 className="text-3xl font-medium">{movie?.name}</h1>
        <div>
          {isFavorite ? (
            <button
              className="flex items-center gap-3 group transition-all duration-300 my-6"
              onClick={addeddToFavritelist}
            >
              <div className="flex items-center justify-center w-12 h-12 border border-yellow-400 group-hover:border-rose-500 rounded-full">
                <Heart className="text-yellow-400 group-hover:text-rose-500" />
              </div>
              <span className="text-yellow-400 group-hover:text-rose-500">
                Remove To Favorite
              </span>
            </button>
          ) : (
            <button
              className="flex items-center gap-3 group transition-all duration-300 my-6"
              onClick={addeddToFavritelist}
            >
              <div className="flex items-center justify-center w-12 h-12 border border-yellow-400 group-hover:border-rose-500 rounded-full">
                <Heart className="text-yellow-400 group-hover:text-rose-500" />
              </div>
              <span className="text-yellow-400 group-hover:text-rose-500">
                Add To Favorite
              </span>
            </button>
          )}
        </div>
        <div>
          <ReactStars
            value={parseInt(movie?.vote_average)}
            count={10}
            isHalf={true}
            size={50}
            onChange={handleRating}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
