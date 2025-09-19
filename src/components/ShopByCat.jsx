import React from 'react'
import categories from '../data/shopByCat'
import { Link } from 'react-router-dom'

const ShopByCat = () => {
  return (
    <>
    <section className="py-12 text-center text-[#FAFAFA] relative">

        {/* bubble Layers  */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-yellow-100 rounded-full top-10 left-10 blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-32 right-[40%] w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-float delay-1000"></div>
          <div className="absolute top-[58%] right-0 w-24 h-24 bg-yellow-100 rounded-full blur-2xl opacity-50 animate-float delay-500 "></div>
        </div>

        <h2 className="mb-8 font-serif text-3xl">Shop By Category</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 p-6 ">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center gap-4 p-6 ">
              <div className=" w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#A5D6A7] shadow-md hover:shadow-lg">
                <img
                  src={cat.img}
                  alt={cat.type}
                  loading='lazy'
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                />
              </div>

              {/* button  */}
              <div 
                className=''
              >
                <Link
                  to={`/shop/${cat.slug}`}
                  className='px-6 py-2 text-lg font-medium text-green-100 transition md:text-xl text-shadow-glow' 
                >
                {cat.type}
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ShopByCat