import React from 'react'
import Product from '../components/Product'

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='feartured-items   h-screen '>
        <div className='text-iphone-white text-5xl'>
          Featured Items:
        </div>
        

      </div>


      <div className='feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl'>
          Featured Items:
        <div>
            
        </div>
        
          <Product productTitles={["A Game of Thrones","A Clash of Kings","A Storm of Swords","A Feast for Crows","A Dance with Dragons"]}  />
          {/* <Product /> */}
        </div>
        

      </div>
    </div>
  )
}

export default Home