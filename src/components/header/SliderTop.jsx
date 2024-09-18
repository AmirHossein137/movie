import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SliderTop = ({ setChangeHeaderBg }) => {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
  }

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      modules={[Autoplay]}
      loop
      className="mySwiper"
    >
      {[1, 2, 3, 4].map((numberImg) => (
        <SwiperSlide key={numberImg}>
          <img
            className="w-full"
            onMouseOver={() => setChangeHeaderBg(getImage(numberImg))}
            src={getImage(numberImg)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTop;
