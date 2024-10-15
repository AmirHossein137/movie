import axios from "axios";

const session_id = localStorage.getItem("session");
export const baseURL = "https://api.themoviedb.org/3";
export const apiKey = "32313ce28319d492025b3bdf4df346db";
export const ImageBaseURL = "https://image.tmdb.org/t/p";

export function posterImage(path, size = "w300") {
  return `https://image.tmdb.org/t/p.${size}/${path}`;
}

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "32313ce28319d492025b3bdf4df346db",
    ...(session_id && { session_id }),
  },
});
