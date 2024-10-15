import { Video } from "lucide-react";
import { ImgURL } from "../../helpers/ImgUrl";
import { Link } from "react-router-dom";

const TvItems = ({ data }) => {
  return (
    <Link
      to={`/tvshow/${data.id}`}
      className="flex items-center gap-2 border-b border-gray-200 pb-3"
    >
      <div>
        {data?.poster_path === null ? (
          <div className="rounded-full flex items-center justify-center h-[50px] w-[50px] bg-gray-400">
            <Video className="text-white" size={40} />
          </div>
        ) : (
          <img
            className="rounded-full h-[50px] w-[50px] object-cover"
            src={ImgURL("w154", data.poster_path)}
          />
        )}
      </div>
      <span>{data.name || data.title}</span>
    </Link>
  );
};

export default TvItems;
