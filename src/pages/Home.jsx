import React, { lazy } from 'react'
import ProductCard from '../components/ProductCard';
import {MoveRight} from 'lucide-react'


const Hero = lazy(() => import('../components/Hero'))
const Review = lazy(() => import('../components/Review'))
const Features = lazy(() => import('../components/Features'))
const BlogSection = lazy(() => import('../components/BlogSection'))

const Home = () => {

  const categories = [
    { name: "Indoor Plants", 
      img: "/shopByCat/indoor.jpg" },
    { name: "Outdoor Plants", 
      img: "/shopByCat/outdoor.jpg" },
    { name: "Office Desk Plants", 
      img: "/shopByCat/officeDesk.jpg" },
    { name: "Gifts Plants & Combo", 
      img: "/shopByCat/gifts.jpg" },
  ];

  return (
    <>
    

      {/* hero section  */}
        <Hero />


      {/* plants by category section  */}
      <section className="py-12 bg-[#1B4332] text-center text-[#FAFAFA] relative">

        {/* bubble Layers  */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-32 right-[40%] w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-float delay-1000"></div>
          <div className="absolute top-[58%] right-0 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50 animate-float delay-500 "></div>
        </div>

        <h2 className="text-3xl font-serif mb-8">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-[#A5D6A7] shadow-lg">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <p className="mt-4 text-lg font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

    {/* our plants section  */}
      <section className="py-16 bg-[#1B4332] text-center text-[#FAFAFA] relative">
        {/* bubble Layers  */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute top-40 left-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-[40%] right-[40%] w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-float delay-2000"></div>
          <div className="absolute top-[58%] right-10 w-32 h-32 bg-yellow-50 rounded-full blur-3xl opacity-50 animate-float delay-1000"></div>
        </div>

        <h2 className="text-3xl font-serif mb-10">Our Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          <ProductCard />
        </div>
        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-[#66BB6A] text-white font-semibold rounded-full shadow-md hover:bg-[#A5D6A7] hover:text-[#1B4332] transition flex items-center gap-2">
            VIEW ALL <MoveRight />
          </button>
        </div>

      </section>

      {/* customer review section  */}
      <Review />

      {/* Feature section  */}
        <Features />

        {/* blog section  */}
        <BlogSection />


    </>
  )
}

export default Home