import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const Banner = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-8">
        Featured Books
      </h1>

      <div className="relative w-11/12 mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {books.map((book, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center w-[250px] sm:w-56 md:w-[264px] lg:w-[320px]"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full lg:h-[1000px] md::h-[900px] h-[700px] rounded-xl object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}

          <div className="slider-controller">
            <div className="swiper-button-prev text-3xl absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next text-3xl absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 cursor-pointer">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>

            <div className="swiper-pagination mt-6"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
