import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'lucide-react'




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


const ProductCard = ({name,sName, price, rating, image, description}) => {
  

  return (
      
        <div
          className="relative p-6 pt-24 transition duration-300 transform border shadow-lg rounded-2xl border-white/20 bg-white/10 backdrop-blur-lg hover:scale-105"
        >
            {/* Plant Image floating */}
          <div className="relative flex items-center justify-center">
            <img
              src={image}
              alt={name}
              loading='lazy'
              className="absolute object-contain bottom-1/2 w-44 h-44 md:w-56 md:h-56 drop-shadow-lg"
            />
          </div>

            {/* Contents  */}
          <h3 className="mt-4 text-xl font-semibold text-center text-white">{name}</h3>
          <p className='mt-2 text-lg italic font-medium text-center text-gray-200'>{sName}</p>
          <p className="text-[#A5D6A7] text-center mt-2">₹{price}</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {renderStars(rating)}
            <span className="text-sm text-center text-gray-200">({rating})</span>
          </div>
          <p className='mt-2 text-center text-gray-200 text-medium'>{description}</p>


          <div className='flex flex-row items-center justify-between gap-4 mt-4'>
            <button
              onClick={() => {}}
              className=" px-4 py-2 bg-white/20 border border-white/30 text-white text-sm rounded-full shadow hover:bg-[#F5F1E6] hover:text-[#2E7D32] transition duration-300"
            >
              BUY NOW
          </button>
          <button
            onClick={() => {}}  
            className='p-2  border border-white/30 text-white text-sm rounded-full shadow  hover:text-[#2E7D32] transition duration-300'
          >
            <ShoppingCart />
          </button>
          </div>

        </div>
  )
}

export default ProductCard