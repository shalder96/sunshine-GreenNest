import React, {useState} from 'react'
import {MoveRight} from 'lucide-react'
import ProductCard from '../components/ProductCard';
import plants from '../data/plants'
import { Link } from 'react-router-dom';

const OurPlantSection = () => {
  const [visible, setVisible] = useState(6)
  return (
    <>
      <section className="py-16 text-center text-[#FAFAFA] relative">
        {/* bubble Layers  */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 bg-yellow-100 rounded-full top-40 left-10 blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-[40%] right-[40%] w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-float delay-2000"></div>
          <div className="absolute top-[58%] right-10 w-32 h-32 bg-yellow-50 rounded-full blur-3xl opacity-50 animate-float delay-1000"></div>
        </div>

        <h2 className="mb-10 font-serif text-3xl">Our Plants</h2>
        <div className="grid grid-cols-1 gap-10 px-8 mx-auto gap-y-16 sm:grid-cols-2 md:grid-cols-3">
          {plants.slice(0,visible).map((plant, idx) => (

            <ProductCard 
              key={idx}
              name={plant.name}
              price={plant.price}
              rating={plant.rating}
              image={plant.image}
            />
          ))

          }
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
            <Link
            to="/shop" 
              className="px-8 py-3 bg-[#66BB6A] text-white font-semibold rounded-full shadow-md hover:bg-[#A5D6A7] hover:text-[#1B4332] transition flex items-center gap-2">
            VIEW ALL <MoveRight />
            </Link>
        </div>

      </section>
    </>
  )
}

export default OurPlantSection