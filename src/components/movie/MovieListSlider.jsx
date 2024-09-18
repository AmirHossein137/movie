import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import MovieCard from "../modules/MovieCard";

const MovieListSlider = ({movies}) => {
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
          slidesPerView: 4,
        },
      }}
      spaceBetween={20}
      modules={[Autoplay]}
      loop
      className="mySwiper"
    >
      {movies.map((img , index) => (
        <SwiperSlide key={index}>
        <MovieCard img={img}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default MovieListSlider