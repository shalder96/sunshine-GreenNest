import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";




const renderStars = (rating) => {
  const stars = [];
  const rounded = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rounded ? (
        <AiFillStar key={i} className="text-xl text-yellow-400" />
      ) : (
        <AiOutlineStar key={i} className="text-xl text-gray-400" />
      )
    );
  }
  return stars;
};


const ProductCard = ({name, price, rating, image}) => {
  

  return (
      
        <div
          className="relative p-6 pt-24 transition duration-300 transform border shadow-lg rounded-2xl border-white/20 bg-white/10 backdrop-blur-lg hover:scale-105"
        >
            {/* Plant Image floating */}
          <div className="absolute transform -translate-x-1/2 -top-12 left-1/2">
            <img
              src={image}
              alt={name}
              loading='lazy'
              className="object-contain w-40 h-40 drop-shadow-lg"
            />
          </div>

            {/* Contents  */}
          <h3 className="mt-4 text-lg font-semibold">{name}</h3>
          <p className="text-[#A5D6A7]">{price}</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-200">({rating})</span>
          </div>

          <button 
            className="mt-4 px-6 py-2 bg-[#A5D6A7] text-[#1B4332] font-semibold rounded-full shadow hover:bg-[#F5F1E6] hover:text-[#2E7D32] transition">
            SHOP NOW
          </button>

        </div>
  )
}

export default ProductCard