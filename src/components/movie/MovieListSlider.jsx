import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import MovieCard from "../modules/MovieCard";

const MovieListSlider = ({ movie }) => {
  console.log(movie)
  return (
    <div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.3,
          },
          500: {
            slidesPerView: 1.7,
          },
          800: {
            slidesPerView: 2.5,
          },
          1050: {
            slidesPerView: 3.3,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {movie.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard
              title={item.title}
              id={item.id}
              poster={item.poster_path}
              rate={item.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieListSlider;
