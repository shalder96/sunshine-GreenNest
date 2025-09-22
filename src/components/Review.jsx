import React, {useState, useRef} from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/review"

const CustomerReviews = () => {
 const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 1440, // large monitors
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 1280, // laptops
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024, // tablets landscape
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768, // tablets portrait
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 640, // phones
      settings: { slidesToShow: 1 },
    },
  ],
  };

  return (
    <section className="relative px-6 py-20 overflow-hidden text-white">
      {/* Bubble backdrop */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-40 h-40 bg-yellow-200 rounded-full top-20 left-10 blur-3xl opacity-30"></div>
        <div className="absolute w-56 h-56 bg-yellow-300 rounded-full bottom-20 right-16 blur-3xl opacity-30"></div>
      </div>

      <h2 className="mb-12 font-serif text-3xl text-center md:text-4xl">
        What Our Customers Say
      </h2>

      <div className="w-full max-w-[90%] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <Slider {...settings} 
          className="custome-slider"
          ref={sliderRef}
        >
          {reviews.map((r, idx) => (
            <div 
              key={idx} 
              className="flex justify-center px-2 sm:px-4"
            >
              <div className="w-full max-w-sm p-4 transition duration-300 border shadow-lg sm:p-6 rounded-2xl bg-white/10 border-white/20 backdrop-blur-lg hover:scale-105">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-14 h-14 rounded-full border-2 border-[#A5D6A7]"
                  />
                  <div>
                    <h3 className="font-semibold">{r.name}</h3>
                    <div className="flex">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm sm:text-base md:text-lg text-[#FAFAFA]/90 leading-relaxed">
                  “{r.review}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
