import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { ImgURL } from "../helpers/ImgUrl";
import { apiClient } from "../services/apiConfig";
import FavoriteSkeleton from "../components/skeleton/FavoriteSkeleton";

const Profile = () => {
  const { user, loading, setLoading } = useUserContext();
  const [favoriteData, setFavoriteData] = useState([]);
  const [favoriteCategory, setFavoriteCategory] = useState("movies");

  console.log(favoriteData.length);

  const FavList = [
    { name: "Movie", url: "movies" },
    { name: "Tv", url: "tv" },
  ];

  console.log(favoriteData.length);

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

  useEffect(() => {
    getDetailsFavorite();
  }, [favoriteCategory]);


  return (
    <div className="w-full">
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
            Array(favoriteData.length).fill().map((_, index) => <FavoriteSkeleton key={index} />)
          ) : (
            <div>
              {favoriteData?.map((item) => (
                <div key={item.id}>{item?.name || item?.title}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
