import React, { lazy } from 'react'





const Hero = lazy(() => import('../components/Hero'))
const Review = lazy(() => import('../components/Review'))
const Features = lazy(() => import('../components/Features'))
const BlogSection = lazy(() => import('../components/BlogSection'))
const ShopByCat = lazy(() => import('../components/ShopByCat'))
const OurPlantSection = lazy(() => import('../components/OurPlantSection'))

const Home = () => {

 

  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-[#054207] to-[#066a52]'></div>
    

      {/* hero section  */}
        <Hero />


      {/* plants by category section  */}
      <ShopByCat />
      

    {/* our plants section  */}
      <OurPlantSection />

      {/* customer review section  */}
      <Review />

      {/* Feature section  */}
        <Features />

        {/* blog section  */}
        <BlogSection />


    </section>
  )
}

export default Home