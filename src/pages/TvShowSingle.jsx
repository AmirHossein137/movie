import { useEffect, useState } from "react";
import { apiClient } from "../services/apiConfig";
import { Link, useParams } from "react-router-dom";
import { ImgURL } from "../helpers/ImgUrl";
import { Heart } from "lucide-react";
import Imdb from "../components/modules/Imdb";
import ReactStars from "react-rating-stars-component";
import SingleMovieSkelet from "../components/skeleton/SingleMovieSkelet";

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


  const handleRating = async (newRating) => {
    await apiClient.post(`/movie/${tvDetail.id}/rating`, { value: newRating });
  };

  // const addedFavorite = () => {

  // }

  console.log(tvDetail);

  useEffect(() => {
    getTvDetail();
  }, [id]);

  return (
    <>
      {loading ? (
        <SingleMovieSkelet />
      ) : (
        <div className="grid grid-cols-12 gap-6 mt-11 max-w-6xl mx-auto">
          <div className="col-span-12 lg:col-span-4">
            <img
              className="w-full rounded-xl"
              src={ImgURL("w780", tvDetail?.poster_path)}
            />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-medium">
                {tvDetail?.name || tvDetail?.title}
              </h1>
              <div className="flex items-center gap-6">
                {/* <div>
                  {isFavorite ? (
                    <button
                      className="flex items-center gap-3 group transition-all duration-300"
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
                      className="flex items-center gap-3 group transition-all duration-300"
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
                </div> */}
                <Link to={`https://www.imdb.com/title/${tvDetail?.imdb_id}`}>
                  <Imdb />
                </Link>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 border-t border-b py-2 border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">Vote :</span>
                  <span className="text-sm text-gray-300">{`${parseFloat(
                    tvDetail?.vote_average
                  )}/10`}</span>
                </div>
                <div>
                  <ReactStars
                    value={parseInt(tvDetail?.vote_average)}
                    count={10}
                    isHalf={true}
                    size={30}
                    onChange={handleRating}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 border-b border-gray-800 pb-3">
                <span className="text-lg font-semibold">Genres : </span>
                {tvDetail?.genres.map((item) => (
                  <span className="text-gray-300 text-sm" key={item.id}>
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-5 border-b border-gray-800 pb-3">
                <span className="text-lg font-semibold">Countries:</span>
                {tvDetail?.production_countries.map((item, index) => (
                  <span className="text-sm text-gray-300" key={index}>
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center flex-wrap gap-5 border-b border-gray-800 pb-3">
                <span className="text-lg font-semibold">Companys:</span>
                {tvDetail?.production_companies.map((item) => (
                  <span className="text-sm text-gray-300" key={item.id}>
                    {item.name}
                  </span>
                ))}
              </div>
              <div>
                <p>{tvDetail?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TvShowSingle;
