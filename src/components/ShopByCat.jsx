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
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 lg:grid-cols-4 group-hover:scale-105 group-hover:border-[#81C784] z-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#A5D6A7] shadow-lg">
                <img
                  src={cat.img}
                  alt={cat.type}
                  loading='lazy'
                  className="object-cover w-full h-full transition duration-300 hover:scale-105"
                />
              </div>

              {/* button  */}
              <div 
                className='mt-12 text-center'
              >
                <Link
                  to={`/shop/${cat.slug}`}
                  className='px-6 py-3 text-lg font-medium text-green-100 transition md:text-xl text-shadow-glow' 
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