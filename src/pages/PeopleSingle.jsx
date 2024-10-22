import { Link, useParams } from "react-router-dom";
import { apiClient } from "../services/apiConfig";
import { useEffect, useState } from "react";
import { ImgURL } from "../helpers/ImgUrl";
import Imdb from "../components/modules/Imdb";

const PeopleSingle = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState(null);
  console.log(personDetails)
  const getPersonDetails = async () => {
    await apiClient.get(`/person/${id}`).then((res) => {
      if (res.status === 200) {
        setPersonDetails(res.data);
      }
    });
  };

  useEffect(() => {
    getPersonDetails();
  }, [id]);

  return <div className="grid grid-cols-12 gap-5 max-w-5xl mx-auto">
    <div className="col-span-12 lg:col-span-4">
        <div>
            <img src={ImgURL('w780' , personDetails?.profile_path)} className="rounded-lg"/>
        </div>
    </div>
    <div className="col-span-12 lg:col-span-8">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 border-b border-gray-700 pb-5">
            <span className="text-2xl font-bold">{personDetails?.name}</span>
            <Link to={`https://www.imdb.com/name/${personDetails?.imdb_id}`}>
                <Imdb />
            </Link>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-700 pb-5">
                <span>Birthday :</span>
                <span className="text-gray-300">{personDetails?.birthday}</span>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-700 pb-5">
                <span>Place Of Birth : </span>
                <span className="text-gray-300">{personDetails?.place_of_birth}</span>
            </div>
            <div className="flex items-center gap-3 border-b border-gray-700 pb-5">
            <span>Department :</span>
            <span className="text-gray-300">{personDetails?.known_for_department}</span>
            </div>
            <p className="text-gray-300 text-justify text-sm">{personDetails?.biography}</p>
        </div>
    </div>
  </div>;
};

export default PeopleSingle;
