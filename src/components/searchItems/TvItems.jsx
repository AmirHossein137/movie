import { Video } from "lucide-react";
import { ImgURL } from "../../helpers/ImgUrl";
import { Link } from "react-router-dom";

const TvItems = ({ data }) => {
  return (
    <Link
      to={`/tvshow/${data.id}`}
      className="flex items-center gap-2 border-b border-yellow-100 pb-3 group transition-all duration-300 hover:border-yellow-800"
    >
      <div>
        {data?.poster_path === null ? (
          <div className="rounded-full flex items-center justify-center h-[50px] w-[50px] bg-user">
            <Video className="text-gray-400" size={40} />
          </div>
        ) : (
          <img
            className="rounded-full h-[50px] w-[50px] object-cover group-hover:scale-105"
            src={ImgURL("w154", data.poster_path)}
          />
        )}
      </div>
      <span className="text-xl font-medium text-gray-300 group-hover:text-white">{data.name || data.title}</span>
    </Link>
  );
};

export default TvItems;
