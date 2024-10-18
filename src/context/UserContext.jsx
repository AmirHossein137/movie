/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { replace, useLocation, useNavigate } from "react-router-dom";
import { apiClient } from "../services/apiConfig";

const UserContext = createContext({});

const api_key = "32313ce28319d492025b3bdf4df346db";
const baseUrl = "https://api.themoviedb.org/3";

export function useUserContext() {
  if (UserContext) {
    return useContext(UserContext);
  }
}

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteTv, setFavoriteTv] = useState([]);
  const [session, setSession] = useState(() => localStorage.getItem("session"));

  async function getUserInfo() {
    const { data } = await apiClient.get("/account");
    FetchFavoriteMovies(data?.id);
    FetchFavoriteTv(data?.id);
    setUser(data);
  }

  async function FetchFavoriteMovies(id) {
    const dataFavorite = await apiClient.get(`account/${id}/favorite/movies`);
    setFavoriteMovies(dataFavorite.data.results);
  }

  async function FetchFavoriteTv(id) {
    const tvFavorite = await apiClient.get(`account/${id}/favorite/tv`);
    setFavoriteTv(tvFavorite.data.results);
  }

  useEffect(() => {
    if (session) {
      getUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  function logout() {
    setUser({});
    setSession(null);
    localStorage.clear();
  }

  useEffect(() => {
    if (session) {
      if (location.pathname === "/login") {
        navigate("/profile", {
          replace: true,
        });
      }
    }
  });

  async function login(username, password) {
    try {
      setLoading(true);
      const tokenResult = await apiClient.get(`/authentication/token/new`);
      const authorize = await apiClient.post(
        `/authentication/token/validate_with_login`,
        { username, password, request_token: tokenResult.data.request_token }
      );

      const session = await apiClient.post(`/authentication/session/new`, {
        request_token: tokenResult.data.request_token,
      });
      setSession(session.data.session_id);
      apiClient.defaults.params.session_id = session.data.session_id;
      localStorage.setItem("session", session.data.session_id);
      if (session.data.success) {
        toast.success("Logged In...");
        navigate("/", {
          replace: true,
        });
        setLoading(false);
      }
    } catch {
      toast.error("Invalid username and password!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        session,
        logout,
        favoriteMovies,
        FetchFavoriteMovies,
        loading,
        setLoading,
        FetchFavoriteTv,
        favoriteTv,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
