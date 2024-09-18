import { Star } from "lucide-react";

const MovieCard = ({img}) => {
  return (
    <div className="bg-black group w-full relative rounded-2xl z-10 overflow-hidden">
      <img src={img} className="w-full " />
      <div className="absolute flex flex-col p-8 top-0 left-0 justify-end w-full h-full font-bold bg-gradient-to-b from-[#0f172a12] to-[#0f172a81] hover:to-[#0f172ac3] transition-all duration-200">
        <span>Die Hard</span>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-500" />
          <span>7.4 / 10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
