import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const MovieCard = ({title,rate,poster , id , mode}) => {
 
  return (
    <Link to={`/${mode === "movie" ? "movies" : "tvshow"}/${id}`} className="bg-black flex group w-full relative rounded-2xl z-10 overflow-hidden">
      <img src={`https://image.tmdb.org/t/p/w780/${poster}`} className="w-full " />
      <div className="absolute flex flex-col p-8 top-0 left-0 justify-end w-full h-full font-bold bg-gradient-to-b from-[#0f172a12] to-[#0f172a81] hover:to-[#0f172ac3] transition-all duration-200">
        <span>{title}</span>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-500" />
          <span>{rate} / 10</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
