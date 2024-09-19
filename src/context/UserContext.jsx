/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const api_key = "32313ce28319d492025b3bdf4df346db";
const baseUrl = "https://api.themoviedb.org/3";

export function useUserContext() {
  if (UserContext) {
    return useContext(UserContext);
  }
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const [successLogin , setSuccessLogin] = useState(null)

  async function getUserInfo() {
    const { data } = await axios.get(
      `${baseUrl}/account?api_key=${api_key}&session_id=${session}`
    );
    setUser(data);
    console.log(data);
  }

  useEffect(() => {
    if (session) {
      getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseUrl}/authentication/token/new?api_key=${api_key}`
      );
      const authorize = await axios.post(
        `${baseUrl}/authentication/token/validate_with_login?api_key=${api_key}`,
        { username, password, request_token: tokenResult.data.request_token }
      );

      const session = await axios.post(
        `${baseUrl}/authentication/session/new?api_key=${api_key}`,
        {
          request_token: tokenResult.data.request_token,
        }
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);

      setSuccessLogin(session.data.success)

      if (session.data.success) {
        toast.success("Logged In...");
      }
    } catch {
      toast.error("Invalid username and password!");
    }
  }

  return (
    <UserContext.Provider value={{ user, login, session , successLogin }}>
      {children}
    </UserContext.Provider>
  );
}
