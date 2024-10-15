import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import { apiClient } from "../services/apiConfig";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { user, session } = useUserContext();

  const getMovieDetail = async () => {
    const res = await apiClient.get(`/movie/${id}`
    );
    setMovie(res.data);
  };

  const handleWatchList = async () => {
    const result = await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=32313ce28319d492025b3bdf4df346db&session_id=${session}`,
      {
        media_type: "movie",
        media_id: movie.id,
        favorite: true,
      }
    );

    if(result.data.success){
      toast.success(`${movie.title} Add To Favorite List`)
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  return (
    <div className="flex items-center gap-5">
      <img src={`https://image.tmdb.org/t/p/w780/${movie?.poster_path}`} />
      <button className="p-4 bg-blue-600 text-white" onClick={handleWatchList}>
        Add To Watch List
      </button>
    </div>
  );
};

export default Movie;
