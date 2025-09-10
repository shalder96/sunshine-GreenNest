import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroBg from "../assets/Hero.png";
import { Typewriter } from "react-simple-typewriter";



export default function Hero() {

  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white">
          <Typewriter
            words={["Greenify Your Space", "Bring Nature Home 🏡", "Plants. Love. Life. 💚"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="mt-4 text-base leading-relaxed text-gray-200 md:text-lg">
          Bring nature closer to your heart. Fresh plants for every home and part.
          Indoor greens or outdoor bloom, we deliver happiness to every room.
        </p>

        <div className="mt-6">
          <Link 
            to='/shop'
            className="relative px-6 py-3 bg-[#F0F0F0] text-green-700 font-bold rounded-full shadow-md hover:bg-[#DDD] hover:shadow-lg transition text-shadow-lg"
          >
          
            SHOP <span className="text-green-500 text-stroke text-stroke-white text-stroke-lg">
              NOW
              </span>
              
           
          </Link>
        </div>

      </div>
    </section>
  );
}
