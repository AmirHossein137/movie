import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";

const SliderTop = () => {
  const [movies, setMovies] = useState([]);

  async function MovieList() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=32313ce28319d492025b3bdf4df346db"
    );
    setMovies(data.results);
  }

  useEffect(() => {
    MovieList();
  }, []);

  return (
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
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} className="rounded-2xl"/>
        </SwiperSlide>
      ))}
        
    </Swiper>
  );
};

export default SliderTop;
