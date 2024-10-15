import { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, session } = useUserContext();
  const navigate = useNavigate();

  console.log(session);

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session]);

  return <div>{user.username}</div>;
};

export default Profile;
