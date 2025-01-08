import React from 'react'
import Product from '../components/Product'
import fiction from '../assets/fiction.png'

function Home() {
  return (
    <div className='min-h-screen'>
      <div className='feartured-items h-screen '>
        <div className='fade text-iphone-white text-5xl font-extrabold'>
          Home Page
        </div>
        

      </div>


      {/* feartured items */}
      <div  className='fade feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Featured Items
        </div>
            
        <div  className=''>
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons"]}  />
        </div>
      </div>

      <div className=' min-h-screen'>
          <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
              Catagories
            </div>
            <div className='fade flex flex-col flex-wrap gap-5'>
              {/* catagories item row */}
              <div className='flex flex-row justify-center gap-5'>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fantasy-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                      Fantasy
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Romance-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                      Romance
                      </h3>
                    </article>
                  </a>
                </div>
                
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Horror-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Horror
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
                       Science Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Religion-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-[-20px] text-3xl font-bold text-iphone-white text-left">
                      Religion & sprituality
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#History-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       History
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#philosophy-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        philosophy
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Biography-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        Biography
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#kids-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        kids
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              

            </div>
      </div>

       {/* item from catagories */}
       <div id='fiction-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Fiction Books
        </div>
        <div className='fade bg-gradient-to-b from-skin-green from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='fantasy-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Fantasy Books
        </div>
        <div className='fade bg-gradient-to-b from-[#1e160a] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='Romance-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Romance Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='kids-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Kids Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='Horror-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Horror Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='philosophy-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Philosophy Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='Religion-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Religion & sprituality Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='Biography-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Biography Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>

       <div id='History-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        History Books
        </div>
        <div className='fade bg-gradient-to-b from-[#310a12] from-20% to-full-black to-50% rounded-3xl min-h-screen' >
        
          <Product productTitles={["A Game of Thrones",
                                   "A Clash of Kings",
                                   "A Storm of Swords",
                                   "A Feast for Crows",
                                   "A Dance with Dragons",]}  />
        </div>
      </div>


    </div>
  )
}

export default Home