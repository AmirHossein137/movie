import { useEffect, useState } from "react";
import { apiClient } from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { ImgURL } from "../helpers/ImgUrl";
import { Heart } from "lucide-react";

const TvShowSingle = () => {
  const { id } = useParams();
  const [tvDetail, setTvDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getTvDetail = async () => {
    setLoading(true);
    await apiClient.get(`/tv/${id}`).then((res) => {
      if (res.status === 200) {
        setTvDetail(res.data);
        setLoading(false);
      }
    });
  };

  // const addedFavorite = () => {

  // }

  console.log(tvDetail);

  useEffect(() => {
    getTvDetail();
  }, [id]);

  return (
    <>
      {loading && <div>Loading ...</div>}
      <div className="grid grid-cols-12 gap-5 mt-11">
        <div className="col-span-4">
          <img
            className="w-full rounded-lg"
            src={ImgURL("w780", tvDetail?.poster_path)}
          />
        </div>
        <div className="col-span-8">
          <h1 className="text-3xl font-medium">{tvDetail?.name}</h1>
          <button className="flex items-center gap-3 group transition-all duration-300 my-6">
            <div className="flex items-center justify-center w-12 h-12 border border-yellow-400 group-hover:border-rose-500 rounded-full">
              <Heart className="text-yellow-400 group-hover:text-rose-500" />
            </div>
            <span className="text-yellow-400 group-hover:text-rose-500">
              Add To Favorite
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TvShowSingle;
