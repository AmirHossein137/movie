import { useUserContext } from "../context/UserContext";
import { ImgURL } from "../helpers/ImgUrl";

const Profile = () => {
  const { user } = useUserContext();

  console.log(user);

  return (
    <div className="w-full">
      <div className="flex items-center gap-5 pb-5">
        <div className="flex items-center justify-center border border-yellow-400 rounded-full w-20 h-20 overflow-hidden p-1">
          <img src={ImgURL("w92", user?.avatar?.tmdb?.avatar_path)} className="object-cover rounded-full"/>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">UserName:</span>
          <span className="text-gray-300 text-lg font-medium">{user?.username}</span>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-2xl font-semibold">My Favorite Lists</h4>
        <div className="flex items-center gap-4 border-b border-gray-700 pb-4">

        </div>
      </div>
    </div>
  );
};

export default Profile;
