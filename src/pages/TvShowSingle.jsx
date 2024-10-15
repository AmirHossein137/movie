import { useEffect, useState } from "react";
import { apiClient } from "../services/apiConfig";
import { useParams } from "react-router-dom";
import { ImgURL } from "../helpers/ImgUrl";

const TvShowSingle = () => {
  const { id } = useParams();
  const [tvDetail, setTvDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getTvDetail = async () => {
    setLoading(true);
    await apiClient.get(`/tv/${id}`).then((res) => setTvDetail(res.data));
    setLoading(false);
  };

  useEffect(() => {
    getTvDetail();
  }, []);

  return (
    <>
      {loading && <div>Loading ...</div>}
      <div className="grid grid-cols-12 gap-5 mt-11">
        <div className="col-span-4">
          <img className="w-full rounded-lg" src={ImgURL("w780", tvDetail?.poster_path)} />
        </div>
        <div className="col-span-8">
            <h1 className="text-3xl font-medium">{tvDetail?.name}</h1>
            <div className="flex items-center gap-6">
                <div className="flex items-center w-7">

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TvShowSingle;
