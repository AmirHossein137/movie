import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { ImgURL } from "../helpers/ImgUrl";
import { apiClient } from "../services/apiConfig";
import { Link, useNavigate } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner";

const Profile = () => {
  const { user, loading, setLoading , session } = useUserContext();
  const [favoriteData, setFavoriteData] = useState([]);
  const navigate = useNavigate()
  const [updated, setUpdated] = useState(false);
  const [favoriteCategory, setFavoriteCategory] = useState("movies");

  if(!session){
    navigate("/login")
  }

  const FavList = [
    { name: "Movie", url: "movies" },
    { name: "Tv", url: "tv" },
  ];

  console.log(favoriteData);

  const getDetailsFavorite = async () => {
    setLoading(true);
    await apiClient
      .get(`/account/${user.id}/favorite/${favoriteCategory}`)
      .then((res) => {
        if (res.status === 200) {
          setFavoriteData(res.data.results);
          setLoading(false);
        }
      });
  };

  const removeFromFavorite = async (id) => {
    if (favoriteCategory === "movies") {
      setLoading(true);
      await apiClient.post(`account/${user.id}/favorite`, {
        media_type: "movie",
        media_id: id,
        favorite: false,
      });
      setLoading(false);
      setUpdated(!updated);
    } else {
      setLoading(true);
      await apiClient.post(`account/${user.id}/favorite`, {
        media_type: "tv",
        media_id: id,
        favorite: false,
      });
      setLoading(false);
      setUpdated(!updated);
    }
  };

  useEffect(() => {
    getDetailsFavorite();
  }, [favoriteCategory, updated]);

  return (
    <div className="w-full my-6">
      <div className="flex items-center gap-5 pb-5">
        <div className="flex items-center justify-center border border-yellow-400 rounded-full w-20 h-20 overflow-hidden p-1">
          <img
            src={ImgURL("w92", user?.avatar?.tmdb?.avatar_path)}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">UserName:</span>
          <span className="text-gray-300 text-lg font-medium">
            {user?.username}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-2xl font-semibold">My Favorite Lists</h4>
        <div className="flex items-center gap-8 mt-8 border-b border-gray-600 pb-3">
          {FavList?.map((item) => (
            <button
              onClick={() => setFavoriteCategory(item.url)}
              className="text-xl"
              key={item.url}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div>
          {loading ? (
            <LoaderSpinner />
          ) : (
            <div className="flex flex-col gap-5 mt-5">
              {favoriteData?.length === 0 && <span className="text-lg font-bold">No Items Found </span>}
              {favoriteData?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center gap-4 border border-slate-700 p-3 rounded-xl"
                >
                  <div>
                    <img
                      src={ImgURL("w154", item?.poster_path)}
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-lg font-semibold">
                      {item?.name || item?.title}
                    </span>
                    <span>{`${item?.vote_average} / 10`}</span>
                    <span>{item?.overview}</span>
                    <div className="flex items-center gap-6 mt-5">
                      <Link
                        to={
                          `${favoriteCategory}` === "movies"
                            ? `/movies/${item?.id}`
                            : `/tvshow/${item?.id}`
                        }
                        className="w-24 sm:w-36 h-11 bg-yellow-600 rounded-lg flex items-center justify-center"
                      >
                        Show
                      </Link>
                      <button
                        onClick={() => removeFromFavorite(item?.id)}
                        className="w-24 sm:w-36 h-11 bg-rose-600 rounded-lg"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
