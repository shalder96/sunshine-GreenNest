import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Aditi Sharma",
      review:
        "Absolutely love my Monstera plant! It arrived healthy and fresh, and it has brightened up my living room instantly. 🌱",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohan Mehta",
      review:
        "Fast delivery and great packaging. The Peace Lily is thriving and looks gorgeous on my desk. Will buy again!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sneha Kapoor",
      review:
        "The Lush Green Plant I ordered exceeded my expectations. Healthy leaves, and the instructions helped a lot.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#1B4332] to-[#2E7D32] text-white overflow-hidden">
      {/* Bubble backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-16 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {reviews.map((r, idx) => (
            <div key={idx} className="px-4">
              <div className="rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-105 transition duration-300">
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
                <p className="text-sm text-[#FAFAFA]/90 leading-relaxed">
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
