import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SliderTop = () => {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
  }

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
      {[1, 2, 3, 4].map((numberImg) => (
        <SwiperSlide key={numberImg}>
          <img
            className="w-full"
            src={getImage(numberImg)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTop;