export const baseURL = "https://api.themoviedb.org/3";
export const apiKey = "32313ce28319d492025b3bdf4df346db";
export const ImageBaseURL = "https://image.tmdb.org/t/p";

export function posterImage(path, size = "w300") {
  return `https://image.tmdb.org/t/p.${size}/${path}`;
}
