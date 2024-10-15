import { Link } from "react-router-dom";
import { ImgURL } from "../../helpers/ImgUrl";
import { User } from "lucide-react";

const PersonItems = ({ data }) => {
  return (
    <Link
      to={`/people/${data.id}`}
      className="flex items-center gap-2 border-b border-gray-200 pb-3"
    >
      <div>
        {data?.profile_path === null ? (
          <div className="rounded-full flex items-center justify-center h-[50px] w-[50px] bg-gray-400">
            <User className="text-white" size={40} />
          </div>
        ) : (
          <img
            className="rounded-full h-[50px] w-[50px] object-cover"
            src={ImgURL("w154", data.profile_path)}
          />
        )}
      </div>
      <span>{data.name || data.title}</span>
    </Link>
  );
};

export default PersonItems;
