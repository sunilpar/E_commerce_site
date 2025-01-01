import React from 'react'
import Product from '../components/Product'

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='feartured-items h-screen '>
        <div className='text-iphone-white text-5xl font-extrabold'>
          Home Page
        </div>
        

      </div>


      <div className='feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Featured Items
        </div>
            
        <div>
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons"]}  />
        </div>
      </div>
    </div>
  )
}

export default Home