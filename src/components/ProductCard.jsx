import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {Link} from 'react-router-dom'




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
          <div className="absolute transform -translate-x-1/2 -top-1/2 left-1/2">
            <img
              src={image}
              alt={name}
              loading='lazy'
              className="object-contain h-60 w-60 drop-shadow-lg"
            />
          </div>

            {/* Contents  */}
          <h3 className="mt-4 text-lg font-semibold">{name}</h3>
          <p className="text-[#A5D6A7]">{price}</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-200">({rating})</span>
          </div>

          <div className='flex flex-row items-center justify-between gap-4 mt-4'>
            <Link
              to=''
              className=" px-4 py-2 bg-white/20 border border-white/30 text-white text-sm rounded-full shadow hover:bg-[#F5F1E6] hover:text-[#2E7D32] transition duration-300"
            >
              BUY NOW
          </Link>
          <Link
            to=''
            className='px-4 py-2 bg-white/20 border border-white/30 text-white text-sm rounded-full shadow hover:bg-[#F5F1E6] hover:text-[#2E7D32] transition duration-300'
          >
            ADD CART
          </Link>
          </div>

        </div>
  )
}

export default ProductCard