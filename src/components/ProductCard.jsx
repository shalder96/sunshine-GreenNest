import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



const renderStars = (rating) => {
  const stars = [];
  const rounded = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rounded ? (
        <AiFillStar key={i} className="text-yellow-400 text-xl" />
      ) : (
        <AiOutlineStar key={i} className="text-gray-400 text-xl" />
      )
    );
  }
  return stars;
};


const ProductCard = () => {

  const products = [
  {
    name: "Monstera deliciosa Plant",
    price: "₹199.00",
    rating: 4.8,
    img: "/ourPlants/montsera.png",
  },
  {
    name: "Lush Green Plant",
    price: "₹89.00",
    rating: 5.0,
    img: "/ourPlants/lushGreen.png",
  },
  {
    name: "Watermelon Peperomia",
    price: "₹149.00",
    rating: 5.0,
    img: "/ourPlants/watermelonPep.png",
  },
  {
    name: "Rubber Plant",
    price: "₹69.00",
    rating: 5.0,
    img: "/ourPlants/rubber.png",
  },
  {
    name: "Birds Nest Plants",
    price: "₹195.00",
    rating: 5.0,
    img: "/ourPlants/birdsNest.png",
  },
  {
    name: "Peace Lily Plant",
    price: "₹99.00",
    rating: 5.0,
    img: "/ourPlants/peaceLily.png",
  },
];

  return (

    <>
      {products.map((plant, idx) => (
        <div
          key={idx}
          className="rounded-2xl p-6 pt-24 shadow-lg border border-white/20 bg-white/10 backdrop-blur-lg hover:scale-105 transition transform duration-300 relative"
        >
            {/* Plant Image floating */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src={plant.img}
              alt={plant.name}
              className="w-40 h-40 object-contain drop-shadow-lg"
            />
          </div>
            {/* Contents  */}
          <h3 className="mt-4 text-lg font-semibold">{plant.name}</h3>
          <p className="text-[#A5D6A7]">{plant.price}</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {renderStars(plant.rating)}
            <span className="text-sm text-gray-200">({plant.rating})</span>
          </div>

          <button 
            className="mt-4 px-6 py-2 bg-[#A5D6A7] text-[#1B4332] font-semibold rounded-full shadow hover:bg-[#F5F1E6] hover:text-[#2E7D32] transition">
            SHOP NOW
          </button>

        </div>
      ))}
    </>
  )
}

export default ProductCard