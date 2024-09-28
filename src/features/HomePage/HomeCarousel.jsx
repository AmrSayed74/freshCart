import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "../../styles/swiperStyles.css";

const HomeCarousel = () => {
  return (
    <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:h-[400px] items-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={(true, { clickable: true })}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-[400px] object-fill"
            src="slider-image-1.jpeg"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-[400px] object-fill"
            src="slider-image-2.jpeg"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] lg:h-[400px] object-fill"
            src="slider-image-3.jpeg"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}

      <div className=" w-full h-[300px] lg:w-auto lg:h-[400px]">
        <img
          src="blog-img-1.jpeg"
          alt=""
          className="w-full h-[150px] lg:h-[200px] object-cover"
        />
        <img
          src="blog-img-2.jpeg"
          alt=""
          className="w-full h-[150px] lg:h-[200px] object-cover"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
