import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/review"

const CustomerReviews = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet and up
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // laptop and up
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
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

      <div className="max-w-6xl mx-auto">
        <Slider {...settings} 
          className="custome-slider"
        >
          {reviews.map((r, idx) => (
            <div 
              key={idx} 
              className="flex justify-center px-4"
            >
              <div className="w-full max-w-sm p-6 transition duration-300 border shadow-lg rounded-2xl bg-white/10 border-white/20 backdrop-blur-lg hover:scale-105">
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
                          size={18}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm md:text-lg text-[#FAFAFA]/90 leading-relaxed">
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
