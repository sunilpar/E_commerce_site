import React from 'react'
import Product from '../components/Product'
import fiction from '../assets/fiction.png'

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='feartured-items h-screen '>
        <div className='text-iphone-white text-5xl font-extrabold'>
          Home Page
        </div>
        

      </div>


      {/* feartured items */}
      <div  className='feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Featured Items
        </div>
            
        <div >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons"]}  />
        </div>
      </div>

      <div className='catalog min-h-screen'>
          <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
              Catagories
            </div>
            <div className='flex flex-col flex-wrap gap-5'>
              {/* catagories item row */}
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              

            </div>


      </div>


    </div>
  )
}

export default Home